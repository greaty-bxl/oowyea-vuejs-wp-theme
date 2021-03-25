<template>
	<div id="owy-chat-builder" @click="_close">
		<div class="chat-button" @click="_open"><font-awesome-icon icon="comment" /></div>
		<div class="wrapper" v-show="open == true">
			<div class="chat-wrap gjs-one-bg">
				<h3 class="clear">Users:</h3>
				<div class="users">					
					<div class="user" v-for="(user, key) in users" :key="key">
						{{user.name}}
					</div>
				</div>
				<h3 class="clear">Messages:</h3>
				<div class="room-chat" v-if="db_ready">
					<div class="messages">
						<div class="message" v-for="(message, key) in messages" :key="key" 
						v-bind:class="{ 
							'itsme' : room.user_peer_id == message.peer, 
							'gjs-four-bg' : room.user_peer_id == message.peer,
							'other' : room.user_peer_id != message.peer
						}">
							<label v-if="room.user_peer_id != message.peer" class="author gjs-four-color" v-html="get_name( message )" ></label>
							<div class="text" v-html="format_text(message.message)"></div>
						</div>
					</div>
					<div class="sender">
						<form @submit="send_message">
							<textarea v-model="input_message" name="message" required></textarea>
							<button type="submit"><font-awesome-icon icon="paper-plane" /></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import strip_tags from 'locutus/php/strings/strip_tags'

	export default {
		data(){
			return {
				open: false,
				users : {},
				room : null,
				db_ready : false,
				input_message: '',
				messages : [],
			}
		},
		methods : {
			_open : function () {
				this.open = true
			},
			_close : function (event) {
				if ( this.jquery(event.target).hasClass('wrapper') )
				{
					this.open = false
				}
			},
			init_chat : function(){
				
				this.room.on('users:update', (users) => {
					console.log('users:update', users);
					this.users = {}
					this.users = users
				})

				this.room.on('database:ready', (database) => {
					this.db_ready = true
					this.database = database
					this.update_messages()
				})

				this.room.on('database:save:message', () => {
					this.update_messages()
				})
			},
			update_messages : function()
			{
				this.database.get('message', (result) => {
					this.messages = result
					this.force_scroll_down()
				})
			},
			force_scroll_down : function(){
				
				let block = this.jquery('.room-chat .messages')
				setTimeout(function() {
					block.scrollTop(block[0].scrollHeight)
				}, 100);
				setTimeout(function() {
					block.scrollTop(block[0].scrollHeight)
				}, 500);
				setTimeout(function() {
					block.scrollTop(block[0].scrollHeight)
				}, 1000);
			},
			send_message : function(e){

				e.preventDefault();

				this.database.save('message', {
					message : this.input_message,
					read : false,
					user_name : this.room.user_data.name,
				}, () => {
					console.log('saved');
				})

				this.input_message = ''
				
			},
			format_text : function(str){
				str = strip_tags( str, '<a>' )
				str = str.split('\n').join('<br />')
				return str
			},
			get_name : function(message){
				return message.user_name
			}
		},
		computed : {
			me : function(){
				return this.$store.state.wp.current_user
			},
		},
		watch : {
			'$store.state.builder_room' : function(){
				this.room = this.$store.state.builder_room
				if( this.room != null )
				{
					console.log(this.room);
					this.init_chat()
				}
			},
		}
	}
</script>

<style scoped>
	#owy-chat-builder{
		position: absolute;
		bottom: 0px;
		right: 0px;
		z-index: 3000;
		font-size: 0.75rem;
	}

	.chat-button{
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}

	.wrapper{
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100vh;
		width: 100%;
		z-index: 4000;
		background: rgba(0,0,0,0.4);
	}

	.chat-wrap{
		width: 400px;
		max-width: 100%;
		height: 100vh;
		margin-left: auto;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	.users {
		height: 30%;
		overflow: auto;
	}
	.user{
		border-bottom: 1px solid rgba(255,255,255,0.5);
	}

	.room-chat{
		height: 70%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.room-chat .messages{
		height: 100%;
		overflow: auto;
	}

	.room-chat .message{
		width: 80%;
		margin-bottom: 10px;
		padding: 8px;
		margin-left: 10px;
	}

	.room-chat .message label{
		font-weight: bold;
	}

	.room-chat .message.other{
		position:relative;
		background-color: rgba(0,0,0,0.3);
		border-radius: 0px 4px 4px 4px;
	}

	.room-chat .message.other:before {
		content:"\A";
		color: transparent;
		border: none;
		width: 0;
		height: 0;
		border-top: 8px solid rgba(0,0,0,0.3);
		border-left: 8px solid transparent;
		position: absolute;
		left: -8px;
		margin-top: -8px;
		border-radius: 2px 0px 0px 0px;
	}
	

	.room-chat .message.itsme{
		position:relative;
		margin-left: auto;
		margin-right: 10px;
		border-radius: 4px 0px 4px 4px;
	}

	.room-chat .message.itsme:before {
		content:"\A";
		color: transparent;
		border: none;
		width: 0;
		height: 0;
		border-top: 8px solid #4D94AE;
		border-right: 8px solid transparent;
		position: absolute;
		right: -8px;
		margin-top: -8px;
		border-radius: 0px 2px 0px 0px;
	}

	.room-chat .sender form{
		width: 100%;
		display: flex;
		padding-top: 5px;
		flex-direction: row;
	}

	.room-chat .sender form *{
		outline: none !important;
	}

	.room-chat .sender form textarea{
		width: 100%;
		height: 70px;
		background: rgba(0,0,0,0.1);
		border: none;
		color: inherit;
		resize: none;
		box-sizing: border-box;
		padding: 5px;
	}

	.room-chat .sender form button{
		background: transparent;
		border: none;
		color: inherit;
		margin-left: 5px;
	}


</style>