<template>
	<div id="owy-chat-builder" @click="_close">
		<div class="chat-button" @click="_open"><font-awesome-icon icon="comment" /></div>
		<div class="wrapper" v-if="open == true">
			<div class="chat-wrap gjs-one-bg">
				<div class="users">
					<div class="user" v-for="(user, key) in users" :key="key">
						{{user.name}}
					</div>
				</div>
				<div class="room-chat" v-if="room_ready">
					<div class="messages">
						<div class="message">
							<label class="author">Mr X</label>
							<div class="text">Blablabla</div>
						</div>
					</div>
					<div class="sender">
						<form @submit="send_message">
							<textarea v-model="input_message" name="message"></textarea>
							<input type="submit">
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
				room : null,
				room_ready : false,
				input_message: '',
			}
		},
		mounted(){
			console.log('chat',this.$store.state.builder_room);
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

				this.room.on('user_data_update', (user) => {
					this.users = this.room.get_other_users()
					console.log('room', this.room.get_other_users(), this.room.users_data, user );
				});

				this.room.on('update_data', (data) => {
					console.log('update_data', data);
				});
					
			},
			send_message : function(e){

				e.preventDefault();

				/*let $ = this.jquery

				console.log( $(e.target).serializeObject() );*/
				this.room.add_to_all('builder_room_message', {
					message : this.input_message,
					timestamp : Date.now(),
					read : false,
				})
				console.log( this.input_message, Date.now() );
				
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
	}

	.user{
		padding: 10px;
		border-bottom: 1px solid #fff;
	}
</style>