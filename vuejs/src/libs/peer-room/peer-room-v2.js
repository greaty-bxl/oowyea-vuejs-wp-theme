import Peer from 'peerjs'
import Database from './libs/database.js'
/*
import Dexie from 'dexie'
import CryptoJS from 'crypto-js'
*/

export default class PeerRoom {

	constructor (settings){

		let defaultsettings = {
			room_group: null,
			room_name: null,
			passphrase: null,
			peer_server: {
				host: 'p2p.oowyea.com',
				port: '',
				path: '/',
				secure: true
			},
			user_data: {},
			objects : {}
		}

		this.settings = Object.assign(defaultsettings, settings)

		this.peer_server = this.settings.peer_server
		this.user_id = this.get_user_id(this.settings.room_group)
		this.host_peer_id = this.settings.room_group +'-'+ this.settings.room_name

		this.user_peer_id = this.user_id
		
		this.host_peer = this.init_peer( this.host_peer_id )
		this.user_peer = this.init_peer( this.user_peer_id )

		this.is_host = false
		this.host_conn = null
		this.conns = {}
		this.users = {}

		this.roomname = settings.room_name
		this.update_data_hooks = {}
		this.init_data_hooks = {}
		this.events = {}

		this.user_data = settings.user_data
		this.user_data['peerID'] = this.user_peer_id

		this.pings = []
		this.pings_timer = []

		console.log('PeerRoom', this);

		setTimeout( () => { 
			this.host_peer = this.init_peer( this.host_peer_id ) 
		}, 5000 )

		this.database = new Database( this.settings.objects, this )
	}

	init_peer( peer_id ){

		let peer = new Peer( peer_id, this.settings.peer_server )

		peer
		.on('open', (id) => {
			//Open as host
			if( peer_id == this.host_peer_id )
			{
				console.log( 'My host ID', id )
				this.is_host = true
				this.host_peer = peer
			}
			//Open user peer
			else
			{
				console.log( 'My peer ID', id )
				this.user_peer = peer
				this.users[this.user_peer_id] = this.user_data
				this.event('users:update', this.users)
				//setTimeout( () => {
				if( !this.is_host ) this.new_connection( this.user_peer, this.host_peer_id )	
				//}, 500 )				
			}

		})
		.on('connection', ( dataConnection ) => {
			//Awaiting users if host
			if( peer.id == this.host_peer_id )
			{
				//host new user ask to join
				this.users[dataConnection.peer] = {}

			}
			//receive data
			dataConnection
			.on('data', (result) => {
				this.receive_data(dataConnection.peer, peer_id, result)
			})
			.on('close', () => {
				console.log('close dataConnection');
			})
			.on('error', () => {
				console.log('error dataConnection');
			})
			.on('disconnected', () => {
				console.log('disconnected');
			})
			
		})
		.on('error', (err) => {

			//If Id is taken, it means host exist
			if( peer_id == this.host_peer_id && err.type == 'unavailable-id' )
			{
				//then connect to host
				this.is_host = false
				this.host_peer = null	
				//if( !this.is_host ) this.new_connection( this.user_peer, this.host_peer_id )
				//this.new_connection( this.user_peer, this.host_peer_id )
			}
			else if( peer_id == this.user_peer_id )
			{
				this.user_peer = null
			}
			else
			{
				//errors
				console.log('peer error', err);	
			}
		})
		

		return peer
	}

	new_connection(peer, peer_id, callback = null){

		if( peer == undefined )
		{
			console.log('New connection: Peer not ready');
			return
		}

		if( this.conns[peer_id] )
		{
			if( this.conns[peer_id].open && callback != null )
			{
				callback(this.conns[peer_id])
				return
			}

			return
		}

		this.conns[peer_id] = peer.connect(peer_id)
		

		this.conns[peer_id]
		.on('open', () => {
			//If connected to host send my user data
			if( peer_id == this.host_peer_id )
			{
				console.log('open host');
				this.send(this.host_peer_id, {'user_join': this.user_data})
			}
			else
			{
				console.log('open user', peer_id);
								
			}

			if( callback != null )
			{
				callback(this.conns[peer_id])
			}

			clearTimeout( this.pings_timer[peer_id] )
			delete this.pings[peer_id]

			this.ping( peer_id )

		})
		.on('close', () => {
			console.log('connection close');
			//delete if exist and is not host
			//connection.close()
			

			clearTimeout( this.pings_timer[peer_id] )

			delete this.users[peer_id]
			delete this.pings[peer_id]
			delete this.conns[peer_id]	
			
			this.event('users:update', this.users)
			//Host log out, try to become host
			this.host_peer = this.init_peer( this.host_peer_id )
			
		})
		.on('error', (err) => {
			console.log('connection error', err);
		})
		.on('disconnected', () => {
			console.log('disconnected', peer, peer_id);
		})
		
	}

	receive_data( from_peer_id, to_peer_id, result ){

		let data = this.decrypt_data(result)

		if( to_peer_id == this.host_peer_id )
		{
			//host receive_data
			if( !data.ping && !data.ping_back ) console.log('host receive_data', data, 'from', from_peer_id);
			if( data.user_join )
			{
				if( this.conns[from_peer_id] )
				{
					this.conns[from_peer_id].close()
					delete this.conns[from_peer_id]
				}

				this.users[from_peer_id] = data.user_join
				this.send_to_all({update_users: this.users})

				this.event('users:update', this.users)
			}
		}
		else
		{
			//user receive_data
			if( !data.ping && !data.ping_back ) console.log('user receive_data', data, 'from', from_peer_id);
			if( data.update_users )
			{
				console.log('users', this.users, data.update_users );
				this.users = data.update_users
				this.get_all_users_conns()

				this.event('users:update', this.users)
			}
		}

		if( data.ping )
		{
			data.ping.time_back = Date.now()
			this.send(from_peer_id, {ping_back: data.ping}, 3)
		}

		if( data.ping_back )
		{
			this.pings[data.ping_back.peer_id] = data.ping_back
		}

		if( data.save )
		{
			data.save.peer = from_peer_id
			this.event('receive:save', data.save)
		}
	}

	send( peer_id, data, tries )
	{

		if( this.conns[peer_id] && this.conns[peer_id].open )
		{
			data = this.encrypt_data( data )
			this.conns[peer_id].send( data )
		}
		else if( this.conns[peer_id] && tries >= 0 )
		{
			tries--
			console.log('connection is not ready: retry in 1000ms', peer_id, 'tries: ', tries );
			setTimeout( () => { this.send( peer_id, data, tries ) }, 1000);
		}
	}

	send_to_all(data)
	{
		this.get_all_users_conns( (connection) => {
			this.send( connection.peer, data )
		})
	}

	get_all_users_conns( callback = null ){
		
		let users = {}

		//get users exepted me
		for (const [key, value] of Object.entries(this.users)) 
		{
			if( key != this.user_peer_id && key != this.host_peer_id )
			{
				users[key] = value
			}
		}

		//check conns
		for (const [key] of Object.entries(users)) 
		{
			if( !this.conns[key] )
			{
				this.new_connection(this.user_peer, key, callback)
			}
			else if ( callback != null )
			{
				callback( this.conns[key] )
			}
		}
	}

	ping( peer_id ){

		if( !this.pings[peer_id] )
		{
			console.log('start ping', peer_id);
			this.pings[peer_id] = {
				peer_id : peer_id,
				time_sent : Date.now(),
				time_back : null,
				try : 0,
			}
			this.send( peer_id, {'ping': this.pings[peer_id] } )
		}
		else if ( this.pings[peer_id].time_back != null )
		{
			//console.log('ping back', peer_id);
			let ping = this.pings[peer_id]
			let diff = ping.time_back - ping.time_sent
			if( peer_id != this.host_peer_id )
			{
				this.users[peer_id]['ping'] = diff
			}
			else
			{
				this.host_ping = diff
			}

			this.pings[peer_id].time_sent = Date.now()
			this.pings[peer_id].time_back = null

			this.send( peer_id, {'ping': this.pings[peer_id] } )
				
		}
		else if( this.conns[peer_id] && this.pings[peer_id] )
		{
			//console.log('ping Awaiting', peer_id);
			let diff = Date.now() - this.pings[peer_id].time_sent
			if( diff > 2000 )
			{
				delete this.users[peer_id]
				delete this.pings[peer_id]
				delete this.conns[peer_id]

				this.event('users:update', this.users)
				if( peer_id == this.host_peer_id )
				{
					this.host_peer = this.init_peer( this.host_peer_id )
				}
				clearTimeout( this.pings_timer[peer_id] )
				return
			}
		}

		clearTimeout( this.pings_timer[peer_id] )
		this.pings_timer[peer_id] = setTimeout( () => {
			this.ping( peer_id )
		}, 500);
	}

	get_user_id(room_group){
		var $return = this.getCookie(room_group)

		if( $return )
		{
			return $return
		}
		else
		{
			var uuidv4 = this.uuidv4()
			this.setCookie(room_group, uuidv4, 1)
			return uuidv4
		}
	}

	decrypt_data(data){
		return data;
	}

	encrypt_data(data){
		return data;
	}

	on(eventName, /*key, */callback){
		if( typeof this.events[eventName] === "undefined") this.events[eventName] = []
		//if( typeof this.events[eventName][key] === "undefined") this.events[eventName][key] = []
		var length = this.events[eventName].length
		if( typeof callback == 'function' && this.events[eventName].includes(callback) === false ) this.events[eventName][length] = callback
	}

	event(eventName, /*key, */result){
		if( this.events[eventName] )
		{
			this.events[eventName].forEach( callback => {
				callback( result )
			})
		}
	}

	/*
	*	Various utilities
	*/

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
	/*
	*  Cookies functions
	*
	*  @type    function
	*  @date    28/01/2019
	*  @since   0.0.0
	*
	*  @from   https://www.w3schools.com/js/js_cookies.asp
	*/
	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
}