import PeerRoom from 'Libs/peer-room.js'

export default function () {

	//let $ = this.jquery 

	this.$store.state.builder_room = new PeerRoom( {
		room_group: this.wp.uid_site,
		room_name: 'owy_builder',
		passphrase: this.wp.peer_admin_key,
		peer_server: {
			host: 'p2p.oowyea.com',
			port: '',
			path: '/',
			secure: true
		}
	})

	let room = this.$store.state.builder_room

	let editor = this.$refs.grapes.editor
	console.log('peer collab', editor );

	let ShortTimer;

	editor.on('load', () => {
		console.log('load');

		
		editor.on('component:selected', () => {
			console.log( editor.getSelected() )
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

	room.on('receive_data', '*', (data) => {
		console.log('data', data);

		if( data['type'] == "updatecss" )
		{
			editor.setStyle( data['css'] )
		}
	});


	//let ShortTimer;

	/*setTimeout( () => {
		editor.on('component:update', () => {

			clearTimeout( ShortTimer );
			ShortTimer = setTimeout( () => {
				let selected = editor.getSelected()
				let selector = .text()
				if( selected )
				{
					console.log('component is update', editor.getSelected(), $('.gjs-clm-sel-id').text() + $('.gjs-clm-sel-rule').text() );
				}
			}, 100);
		})

	},1);*/
	
}