/*
*	PeerJs Room 
*	
*	@date 	2020-04-04
*
*	TODO
*	- Define vars out of constructor
*	- Init data & synch Db with other peers (add an UUID for each db entry) 
*/

import Peer from 'peerjs'
import Dexie from 'dexie'
import CryptoJS from 'crypto-js'

export default class PeerRoom {

	constructor (args){

		let defaultArgs = {
			room_group: null,
			room_name: null,
			passphrase: null,
			peer_server: {
				host: 'p2p.oowyea.com',
				port: '',
				path: '/',
				secure: true
			},
			user_data: {}
		}

		args = Object.assign(defaultArgs, args)
		this.args = args

		let user_id = this.get_user_id(args.room_name)
		let host_id = args.room_group+'-'+args.room_name
		let user_peer_id = host_id+'-'+user_id
		let user_peer = new Peer(user_peer_id, args.peer_server)
		let host_peer = null
		let users = []

		this.peer_server = args.peer_server
		this.user_id = user_id
		this.host_id = host_id
		this.user_peer_id = user_peer_id
		this.user_peer = user_peer
		this.host_peer = host_peer
		this.is_host = false
		this.is_user_connect = false
		this.is_host_connect = false
		this.conns = {}
		this.users = users
		this.users_data = {}
		this.roomname = args.room_name
		this.update_data_hooks = {}
		this.init_data_hooks = {}
		this.events = {}

		this.user_data = args.user_data
		this.user_data['peerID'] = user_id

		this.db = null

		this.user_peer.on('open', (id) => {

			console.log('My peer ID is: ' + id)

			this.is_user_connect = true

			this.users_data[this.user_peer_id] = this.user_data
			this.event('user_data_update', '*', this.users_data)

			this.make_me_host()

			if( this.events['update_data'] ) 
			{
				this.synchro_data()
			}
		}).on('connection', ( dataConnection ) => {
			dataConnection.on('data', (result) => {
				console.log( 'connected', result );
				this.on_peer_message(dataConnection, result)
			})
		}).on('error', function(err) {
			if( err.type == 'peer-unavailable' && Object.keys(this.connections)[0] == host_id )
			{
				/*console.log( 'Make me host' )
				$this.users.push($this.user_peer_id)
				$this.make_me_host()*/
			}
			else
			{
				//console.log('user error', err.type, err)
			}
		}).on('close', function(){
			console.log('close')
		}).on('disconnected', function(){
			console.log('disconnected')
		})
	}

	on_peer_message(dataConnection, result){
		
		let decrypt_error = false

		if( this.args.passphrase != null && typeof result !== 'object' )
		{
			try {
				result = JSON.parse( CryptoJS.AES.decrypt( result, this.args.passphrase ).toString(CryptoJS.enc.Utf8) )
			} catch (error) {
				console.error(error);
				decrypt_error = error
			}
		}

		if( decrypt_error )
		{
			console.log( 'decrypt data error' );
			return
		}

		console.log( 'receive data', result )


		if(result.update_users)
		{
			console.log('update_users');
			this.users = result.update_users
			this.send_to_all({'user_data_update':this.user_data})
		}
		if(result.add_to_all) 
		{
			this.save_data(result.add_to_all.key, result.add_to_all.data)
		}
		if(result.user_data_update)
		{
			this.users_data[dataConnection.peer] = result.user_data_update
			this.event('user_data_update', '*', this.users_data)
		}	
	}

	make_me_host(){
		let $this = this;

		this.host_peer = new Peer($this.host_id, $this.peer_server)

		this.host_peer.on('open', function(id) {
			console.log('My host ID is: ' + id)
			$this.is_host = true
			$this.is_host_connect = true
			if( $this.users.indexOf($this.user_peer_id) == -1 )
			{
				$this.users.push($this.user_peer_id)
			}			
		}).on('connection', function( dataConnection ) {
			console.log( 'host connection',  dataConnection.peer )
			$this.host_new_user( dataConnection.peer )
		}).on('error', function(err) {
			if( err.type == 'unavailable-id' )
			{
				console.log('connect to host')
				$this.is_host = false
				$this.is_host_connect = false
				$this.host_peer.destroy()
				$this.host_peer = $this.user_peer.connect($this.host_id)
				$this.host_peer.on('open', function() {
					console.log('host open');
					$this.is_host_connect = true
				}).on('close', function(){
					console.log('host close', $this.host_peer)
					$this.is_host_connect = false
					$this.make_me_host()
				}).on('disconnected', function(){
					$this.is_host_connect = false
					console.log('host disconnected', $this.host_peer)
				}).on('error', function(err) {
					$this.is_host_connect = false
					console.log('host', err)
				});
			}
			else
			{
				//console.log('error', err.type, err)
			}	
		});
	}

	update_user_data( data ){
		this.send_to_all({ 'user_data_update': data })
	}

	get_other_users(){
		var other_users = {}
		other_users = Object.assign({}, this.users_data)
		delete other_users[this.user_peer_id]
		return other_users
	}

	get_user_id(roomname){
		var $return = this.getCookie(roomname)

		if( $return )
		{
			return $return
		}
		else
		{
			var uuidv4 = this.uuidv4()
			this.setCookie(roomname, uuidv4, 1)
			return uuidv4
		}
	}

	host_new_user( new_peer ){
		let $this = this;
		console.log('host_new_user', new_peer, this.users)
		if( this.users.indexOf(new_peer) == -1 )
		{
			this.users.push(new_peer)
		}
		this.users.forEach(async function(user) { 
			console.log('each', user)
			$this.host_send_data( user, {'update_users': $this.users} )	
		})
	}

	as_peer_send_data( as_peer, user, data ){
		this.promiseConnection(as_peer, user, (conn) =>{
			
			if( this.args.passphrase != null )
			{
				data = CryptoJS.AES.encrypt( JSON.stringify(data), this.args.passphrase ).toString()
			}
			conn.send(data);
		});
	}

	host_send_data( user, data ){
		this.as_peer_send_data( this.host_peer, user, data )
	}

	send_data( user, data ){
		this.as_peer_send_data( this.user_peer, user, data )
	}

	send_to_all(data){
		let $this = this;
		this.users.forEach(async function(user) { 
			$this.send_data( user, data )
		})
	}

	add_to_all(key, data){
		data['uid'] = this.uuidv4()
		this.users.forEach(async (user) => { 
			this.send_data( user, {add_to_all : {key: key, data: data}} )
		})
		this.save_data(key, data)
	}

	save_data(key, data){
		this.db = new Dexie('PeerDB-'+this.roomname)
		let tempArray = Object.assign( {}, data )
		delete tempArray.uid
		let new_store = {}
		new_store[key] = "++id,&uid"+Object.keys(tempArray).join()
		this.db.version(1).stores( new_store )

		delete data.id
		this.db[key].add(data);

		this.event('update_data', key, {data: data, db: this.db[key]})

		console.log('save_data', data)
	}

	synchro_data(){
		var keys = Object.keys(this.events['update_data'])
		console.log( keys )
		keys.forEach( key =>{
			console.log('synchro_data', key);
		})
	}

	on(eventName, key, callback){
		if( typeof this.events[eventName] === "undefined") this.events[eventName] = {}
		if( typeof this.events[eventName][key] === "undefined") this.events[eventName][key] = []
		var length = this.events[eventName][key].length
		if( typeof callback == 'function' && this.events[eventName][key].includes(callback) === false ) this.events[eventName][key][length] = callback
	}

	event(eventName, key, result){
		if( this.events[eventName] )
		{
			this.events[eventName][key].forEach( callback => {
				callback( result )
			})
		}
	}

	promiseConnection( as_peer, user, callback ){
		//let $this = this;
		if( user == this.user_peer_id )
		{
			return
		}
		if( this.conns[user] )
		{
			if(this.conns[user].open ) callback( this.conns[user] )
		}
		else //first connection with other peers
		{
			var conn = as_peer.connect(user)

			conn.on('open', () => {
				this.conns[user] = conn
				let data = { 'user_data_update': this.user_data }

				if( this.args.passphrase != null )
				{
					data = CryptoJS.AES.encrypt( JSON.stringify(data), this.args.passphrase ).toString()
				}
				conn.send( data )

				callback( conn )
			}).on('error', (err) => {
				console.log( 'peer error', user, err.type, err )
			}).on('close', () => {
				console.log('peer close', user)
				var index = this.users.indexOf(user);
				if (index > -1) {
					this.users.splice(index, 1);
				}
				delete this.users_data[user]
				delete this.conns[user]
				this.event('user_data_update', '*', this.users_data)
			}).on('disconnected', () => {
				console.log('peer disconnected', user)
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