<template>
	<div id="owy-chat-builder" @click="_close">
		<div class="chat-button" @click="_open"><font-awesome-icon icon="comment" /></div>
		<div class="wrapper" v-if="open == true">
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
							'itsme' : me.ID == message.user_id, 
							'gjs-four-bg' : me.ID == message.user_id,
							'other' : me.ID != message.user_id
						}">
							<label v-if="me.ID != message.user_id" class="author gjs-four-color" v-html="get_name( message )" ></label>
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
	export default {
		data(){
			return {
				open: true,
				users : {},
				user_name_by_id: {},
				room : null,
				room_ready : false,
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

				this.room.on('user_data_update', () => {
					
					let users = this.room.get_other_users()
					this.user_name_by_id = {}
					this.jquery.each(users, (index, val) => {
						this.user_name_by_id[val.id] = val.name
					});
					
					this.users = users
					console.log(this.room);
				});

				this.room.on('update_data', () => {
					this.db_to_message()

				});

				this.room.on('dexie_db_ready', () => {
					this.db_ready = true
					this.db_to_message()
				});					
			},
			db_to_message : function(){
				this.room.db.table('builder_room_message').toArray().then( (messages) => {					
					this.messages = messages
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
					
				})
			},
			send_message : function(e){

				e.preventDefault();

				this.room.add_to_all('builder_room_message', {
					timestamp : Date.now(),
					message : this.input_message,
					read : false,
					user_id : this.room.user_data.id,
					user_name : this.room.user_data.name
				})

				this.input_message = ''
				
			},
			format_text : function(str){
				str = str.split('\n').join('<br />')
				return str
			},
			get_name : function(message){
				let by_id = this.user_name_by_id[message.user_id]
				if( by_id )
				{
					return by_id
				}
				else
				{
					return message.user_name + ' (offline)'
				}
			}
		},
		computed : {
			me : function(){
				return this.$store.state.wp.current_user
			}
		},
		watch : {
			'$store.state.builder_room' : function(){
				this.room = this.$store.state.builder_room
				if( this.room != null && this.room_ready == false )
				{
					this.room_ready = true
					this.init_chat()
				}
			}
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