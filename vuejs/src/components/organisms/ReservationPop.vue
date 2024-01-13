<template>
	<div class="popup-form d-flex justify-content-center align-items-start" data-scroll data-scroll-sticky v-if="$store.state.reservation" @click="close">		
		<div class="popup-form-container">
			<div class="popup-form-close">
				<span class="close-bt" @click="close">x</span>
			</div>
			<div class="popup-form-content">
				<div class="form-header" :style="{backgroundImage: 'url(/assets/reservation-image.jpg)'}">
					
				</div>
				<form @submit.prevent="submit">			
					<div class="main-line d-flex justify-content-center align-items-center">
						<div class="arrow left" @click="subtractOneDay">&lt;</div>
						<div>
							<input type="date" v-model="date" required :disabled="isSubmitting"/>
							<br><label>Date</label>
						</div>
						<div class="arrow right" @click="addOneDay">&gt;</div>
					</div>
					<div class="main-line d-flex justify-content-center align-items-center">
						<div class="arrow left" @click="decreaseNumber">&lt;</div>
						<div>
							<input type="number"  v-model="number" required :disabled="isSubmitting"/>
							<br><label>Personnes</label>
						</div>
						<div class="arrow right" @click="increaseNumber">&gt;</div>
					</div>
					<div class="main-line d-flex justify-content-center align-items-center">
						<div class="arrow left" @click="subtract30Minutes">&lt;</div>
						<div>
							<input type="time" v-model="time" required :disabled="isSubmitting"/>
							<br><label>Heure</label>
						</div>
						<div class="arrow right" @click="add30Minutes">&gt;</div>
					</div>
					<div class="p-3">
						<div class="row gx-3 my-3 ">
							<div class="col">
								<input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" v-model="firstName" required :disabled="isSubmitting">
							</div>
							<div class="col">
								<input type="text" class="form-control" placeholder="Nom" aria-label="Nom" v-model="lastName" required :disabled="isSubmitting">
							</div>
						</div>

						<!-- Ligne 2 : Téléphone et Email avec une gouttière -->
						<div class="row gx-3 mb-3">
							<div class="col">
								<input type="tel" class="form-control" placeholder="Téléphone" aria-label="Téléphone" v-model="phone" required :disabled="isSubmitting">
							</div>
							<div class="col">
								<input type="email" class="form-control" placeholder="Email" aria-label="Email" v-model="email" required :disabled="isSubmitting">
							</div>
						</div>

						<!-- Ligne 3 : Commentaire -->
						<div class="row gx-3 mb-3">
							<div class="col">
								<textarea class="form-control" placeholder="Commentaires, allergies et habitudes alimentaires (facultatif)" aria-label="Commentaire" rows="3" v-model="comments" :disabled="isSubmitting"></textarea>
							</div>
						</div>

						<!-- Checkbox pour la politique de confidentialité -->
						<div class="row gx-3 mb-3 form-check" style="text-align: left;">
							<div class="col">
								<input type="checkbox" class="form-check-input" id="privacyPolicyCheck" v-model="isPolicyChecked" :disabled="isSubmitting">
								<label class="form-check-label" for="privacyPolicyCheck">
									J'ai lu et j'accepte la <a href="URL_DE_VOTRE_POLITIQUE">politique de confidentialité</a>.*
								</label>
							</div>
						</div>
						<div class="row gx-3 my-4">
							<div class="col d-flex justify-content-center">
								<button v-if="!isSubmitting" class="form-submit" type="submit" :disabled="isSubmitting">Faire une demande de réservation</button>
								<div class="text-center" v-if="isSubmitting">
									<div class="spinner-border" role="status">
									</div>
								</div>
							</div>
						</div>

					</div>
				</form>
			</div>	
		</div>
	</div>
</template>

<script>

	import wp_ajax from 'Libs/wp-ajax'
	
	export default {
		data(){
			return {
				date : null,
				dateTimeout: null,
				number : 2,
				time: '12:00',
				firstName: '',
				lastName: '',
				phone: '',
				email: '',
				comments: '',
				isPolicyChecked: false,
				isSubmitting: false,
			}
		},
		components: {
			
		},
		props: {
			
		},
		mounted (){
			console.log('resa form', this.wp);

			this.default_date_time()

			
		},
		methods : {
			close : function(e) {
				if( this.$(e.target).hasClass('popup-form-content') || this.$(e.target).hasClass('close-bt') )
				{
					this.$store.state.reservation = false	
				}
				
			},
			default_date_time : function(){
				var today = new Date();

				// Ajouter un jour
				var tomorrow = new Date(today);
				tomorrow.setDate(tomorrow.getDate() + 1);
				// Formater la date today (YYYY-MM-DD)
				var td_dd = String(today.getDate()).padStart(2, '0');
				var td_mm = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0!
				var td_yyyy = today.getFullYear();

				// Formater la date tomorrow (YYYY-MM-DD)
				var tm_dd = String(tomorrow.getDate()).padStart(2, '0');
				var tm_mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0!
				var tm_yyyy = tomorrow.getFullYear();

				var currentTime = new Date();
				var currentHour = currentTime.getHours();
				

				if (currentHour < 12) {
					// Il est avant midi
					this.date = td_yyyy + '-' + td_mm + '-' + td_dd;
					this.time = '12:00';
				} else if (currentHour >= 12 && currentHour < 18) {
					// Il est après midi mais avant 18h
					this.date = td_yyyy + '-' + td_mm + '-' + td_dd;
					this.time = '18:00';
				} else {
					// Il est après 18h
					this.date = tm_yyyy + '-' + tm_mm + '-' + tm_dd;
					this.time = '12:00'; // Réglez sur 12h00 pour le lendemain
				}
			},
			format_date(date){
				var dd = String(date.getDate()).padStart(2, '0');
				var mm = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0!
				var yyyy = date.getFullYear();
				return yyyy + '-' + mm + '-' + dd;
			},
			addOneDay : function () {
				var result = new Date(this.date);
				result.setDate(result.getDate() + 1);
				this.date = this.format_date(result)
			},
			subtractOneDay : function() {
				var result = new Date(this.date);
				result.setDate(result.getDate() - 1);
				this.date = this.format_date(result)
			},
			increaseNumber() {
				this.number += 1;
			},
			decreaseNumber() {
				if (this.number > 1) {
					this.number -= 1;
				}
			},
			add30Minutes() {
				let newTime = this.changeTime(30);
				if (!this.isValidTime(newTime)) {
					if (newTime === '15:00') {
						newTime = '18:00';
					} else if (newTime === '21:30') {
						newTime = '12:00';
					}
				}
				this.time = newTime;
			},

			subtract30Minutes() {
				let newTime = this.changeTime(-30);
				if (!this.isValidTime(newTime)) {
					if (newTime === '11:30') {
						newTime = '21:30';
					} else if (newTime === '17:30') {
						newTime = '14:30';
					}
				}
				this.time = newTime;
			},
			changeTime(minutes) {
				// Convertir l'heure actuelle en un objet Date
				const timeParts = this.time.split(':');
				const date = new Date();
				date.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);

				// Ajouter ou soustraire 30 minutes
				date.setMinutes(date.getMinutes() + minutes);

				// Formater et retourner la nouvelle heure
				return date.toTimeString().slice(0, 5);
			},
			isValidTime(time) {
				const [hours, minutes] = time.split(':').map(Number);
				const totalMinutes = hours * 60 + minutes;

				// Convertir les heures d'ouverture en minutes
				const openMorning = 12 * 60; // 12h00
				const closeAfternoon = 14.5 * 60; // 14h30
				const openEvening = 18 * 60; // 18h00
				const closeNight = 21.5 * 60; // 21h30

				return (totalMinutes >= openMorning && totalMinutes <= closeAfternoon) ||
					(totalMinutes >= openEvening && totalMinutes <= closeNight);
			},
			submit() {
				if (!this.isPolicyChecked) {
					alert("Veuillez accepter la politique de confidentialité.");
					return;
				}

				// Désactiver le formulaire
				this.isSubmitting = true;

				// Préparer les données du formulaire pour l'envoi
				const formData = {
					type: this.$store.state.res_type,
					date: this.date,
					number: this.number,
					time: this.time,
					firstName: this.firstName,
					lastName: this.lastName,
					phone: this.phone,
					email: this.email,
					comments: this.comments,
					// ... autres données si nécessaire ...
				};

				wp_ajax( 'submit_reservation', 
					formData,
					(data) => {
						console.log('resa ajax', data);
						
						document.location.href = this.wp.reservation_confirmation.permalink
						
						// Réactiver le formulaire
						
					}
				)
				
				//this.resetForm();
				// Reset le formulaire ou rediriger l'utilisateur, selon les besoins
			},
			resetForm() {
				this.date = null; // ou une autre valeur par défaut
				this.number = 2; // ou votre valeur par défaut initiale
				this.time = '12:00'; // ou votre valeur par défaut initiale
				this.firstName = '';
				this.lastName = '';
				this.phone = '';
				this.email = '';
				this.comments = '';
				this.isPolicyChecked = false;

				this.default_date_time()
			}
		},
		watch: {
			date(newValue) {
				if (this.dateTimeout) {
					clearTimeout(this.dateTimeout);
				}

				this.dateTimeout = setTimeout(() => {
					const today = new Date();
					const selectedDate = new Date(newValue);

					today.setHours(0, 0, 0, 0);
					selectedDate.setHours(0, 0, 0, 0);

					if (selectedDate < today) {
						this.date = this.format_date(today);
					}
				}, 2000); // Délai de 1 seconde
			},

			time(newValue) {
				if (!this.isValidTime(newValue)) {
					// Réinitialiser à une heure valide selon l'heure actuelle
					var currentTime = new Date();
					var currentHour = currentTime.getHours();
					if (currentHour >= 12 && currentHour <= 14) {
						this.time = '12:00';
					} else if (currentHour >= 18 && currentHour <= 21) {
						this.time = '18:00';
					} else {
						this.time = '12:00'; // Par défaut à 12h00
					}
				}
			}

		},

	}
</script>

<style>
	.popup-form {
		z-index: 10000;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.8);
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		display: block;
	}
	.popup-form-container {
		max-width: 600px;
		width: 90%;
		margin: 10px 0 20px;
	}
	.popup-form-close{
		color: #B49E5C;
		font-size: 25px;
		margin-bottom: 15px;
		text-align: right;
	}
	.popup-form-close span{
		user-select: none;
		cursor: pointer;
	}
	.popup-form-content {
		background-color: white;
		width: 100%;
		border-radius:7px;
	}
</style>

<style scoped>
	.form-header{
		height: 200px;
		background-size: cover;
		background-position: center;
		border-radius:7px 7px 0 0;
	}
	.main-line {
		padding: 15px;
		border-bottom: solid 1px #dee2e6;
	}

	.main-line input {
		border: 0;
		font-size: 20px;
		text-align: center;
		outline: none;
		width: 150px;

	}

	input[type="date"]::-webkit-calendar-picker-indicator,
	input[type="time"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.arrow {
		font-size: 28px;
		cursor: pointer;
		user-select: none;
	}

	.arrow.left {
		margin-right: 25px;
	}

	.arrow.right {
		margin-left: 25px;
	}

	.form-submit {
		background-color: #B49E5C;
		margin: auto;
		border: none;
		border-radius: 5px;
		color: #FFFFFFCC;
		padding: 5px 15px;
	}

	/*.row > div {
		padding: 15px;
	}*/
</style>