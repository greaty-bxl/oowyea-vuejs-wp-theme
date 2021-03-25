import PeerRoom from 'Libs/peer-room/peer-room-v2.js'
//import noty from 'Libs/noty.js'

export default function () {

	let current_user = this.$store.state.wp.current_user
	let user_data = current_user.data

	this.$store.state.builder_room = new PeerRoom( {
		room_group: this.wp.uid_site,
		room_name: 'owy_builder',
		passphrase: this.wp.peer_admin_key,
		rooms : {
			
		},
		peer_server: {
			host: 'p2p.oowyea.com',
			port: '',
			path: '/',
			secure: true
		},
		user_data: {
			name : user_data.display_name,
			id : user_data.ID
		},
		objects : {
			message : {
				message : String,
				read : Boolean,
				user_name : String,
			}
		}
	})

}