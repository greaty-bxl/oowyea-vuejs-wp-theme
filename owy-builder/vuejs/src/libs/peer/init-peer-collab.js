import PeerRoom from 'Libs/peer-room.js'
import noty from 'Libs/noty.js'

export default function () {

	//let $ = this.jquery 
	let current_user = this.$store.state.wp.current_user
	let user_data = current_user.data

	this.$store.state.builder_room = new PeerRoom( {
		room_group: this.wp.uid_site,
		room_name: 'owy_builder',
		passphrase: this.wp.peer_admin_key,
		peer_server: {
			host: 'p2p.oowyea.com',
			port: '',
			path: '/',
			secure: true
		},
		user_data: {
			name : user_data.display_name,
			id : user_data.ID
		}
	})

	console.log( 'current_user', user_data);

	let room = this.$store.state.builder_room

	let editor = this.$refs.grapes.editor
	console.log('peer collab', editor );

	let ShortTimer; //avoid repeated events

	editor.on('load', () => {
		
		editor.on('component:selected', () => {
			//console.log( editor.getSelected() )
		})

		editor.on('component:styleUpdate', () => {
			
			clearTimeout( ShortTimer );
			ShortTimer = setTimeout( () => {
				let data = {
					type : 'updatecss',
					css: editor.getCss()
				}
				console.log( 'styleUpdate', data )
				room.send_to_all( data )
			}, 1);
		})
	});

	room.on('receive_data', (data) => {
		console.log('receive_data', data);

		if( data['type'] == "updatecss" )
		{
			editor.setStyle( data['css'] )
		}
	});

	/*room.on('user_data_update', (result) => {

		console.log('new_user', result );
		
		noty({
			text: result.name,
			type: 'success'
		})
	});*/

	room.on('user_join', (result) => {

		console.log('User join', result );
		
		noty({
			text: 'User join: ' + result.name,
			type: 'success'
		})
	});
	
}