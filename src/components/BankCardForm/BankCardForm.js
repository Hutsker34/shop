import './BankCardForm.css'
import { useState } from 'react'

function BankCardForm() {
//     // Tarjeta
// const card = document.querySelector('#card');
// const logoCard = document.getElementById('logo-card');
// const numberCard = document.querySelector('#card .number-card');
// const nameCard = document.querySelector('#card .name-card');
// const mounthExpirationCard = document.querySelector('#card .mounth-expiration-card');
// const yearExpirationCard = document.querySelector('#card .year-expiration-card');
// const firmCard = document.querySelector('#card .firm-card p');
// const ccvCard = document.querySelector('#card .ccv-card');

// // Formulario Tarjeta
// const btnOpenForm = document.getElementById('btn-open-form-card');
// const formCard = document.getElementById('form-card');
// const numberCardForm = document.getElementById('number-card-form');
// const nameCardForm = document.getElementById('name-card-form');
// const selectMounthCardForm = document.getElementById('mounth-expiration-card-form');
// const selectYearCardForm = document.getElementById('year-expiration-card-form');
// const ccvCardForm = document.getElementById('ccv-card-form');

// const showFrontCard = () => {
// 	if ( card.classList.contains('active') ) {
// 		card.classList.remove('active');
// 	}
// }

// // Rotación de la tarjeta
// card.addEventListener('click', () => {
// 	card.classList.toggle('active');
// });

// // Abrir formulario
// btnOpenForm.addEventListener('click', () => {
// 	btnOpenForm.classList.toggle('active');
// 	formCard.classList.toggle('active');
// });

// // Llenar el select del mes dinamicamente
// for (let i = 1; i <= 12; i++) {
// 	let option = document.createElement('option');
// 	option.value = i;
// 	option.innerText = i;
// 	selectMounthCardForm.appendChild(option);
// }

// // Llenar el select del año dinamicamente
// let currentYear = new Date().getFullYear();

// for (let i = currentYear; i <= currentYear + 8; i++) {
// 	let option = document.createElement('option');
// 	option.value = i;
// 	option.innerText = i;
// 	selectYearCardForm.appendChild(option);
// }

// // Número de tarjeta
// numberCardForm.addEventListener('keyup', e => {
// 	let valueNumberCardForm = e.target.value
// 		// Eliminar espacios en blanco
// 		.replace(/\s/g, '')
// 		// Eliminar todos los caracteres que no sean números del 0 al 9
// 		.replace(/\D/g, '')
// 		// Colocamos espacio cada cuatro caracteres
// 		.replace(/([0-9]{4})/g, '$1 ')
// 		.trim();
// 	numberCardForm.value = valueNumberCardForm;
	
// 	numberCard.textContent = valueNumberCardForm;
	
// 	if ( valueNumberCardForm === '' ) {
// 		numberCard.textContent = '#### #### #### ####';
// 		logoCard.innerHTML = '';
// 	}
	
// 	if ( valueNumberCardForm[0] === '4' ) {
// 		logoCard.innerHTML = '';
// 		let imgLogo = document.createElement('img');
// 		imgLogo.src = 'https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fvisa.png?alt=media&token=d1324d01-81f6-42d4-a37c-1edc19e1e0b1';
// 		logoCard.appendChild(imgLogo);
// 	} else if ( valueNumberCardForm[0] === '5' ) {
// 			logoCard.innerHTML = '';
// 			let imgLogo = document.createElement('img');
// 			imgLogo.src = 'https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fmastercard.png?alt=media&token=1a5347d2-a282-436f-87a8-f193458830f4';
// 			logoCard.appendChild(imgLogo);
// 		}
	
// 	// Voltear la tarjeta para que el usuario vea el frente
// 	showFrontCard();
	
// });

// // Formulario nombre tarjeta
// nameCardForm.addEventListener('keyup', e => {
// 	let valueNameCardForm = e.target.value.replace(/[0-9]/g, '');
	
// 	nameCardForm.value = valueNameCardForm;
// 	nameCard.textContent = valueNameCardForm;
// 	firmCard.textContent = valueNameCardForm;
	
// 	if ( valueNameCardForm === '' ) {
// 		nameCard.textContent = 'John Doe';
// 	}
	
// 	showFrontCard();
// });

// // Select mes
// selectMounthCardForm.addEventListener('change', e => {
// 	mounthExpirationCard.textContent = e.target.value;
// 	showFrontCard();
// });


// // Select año
// selectYearCardForm.addEventListener('change', e => {
// 	yearExpirationCard.textContent = e.target.value.slice(2);
// 	showFrontCard();
// });

// // Ccv
// ccvCardForm.addEventListener('keyup', e => {
// 	if ( !card.classList.contains('active') ) {
// 		card.classList.add('active');
// 	}
	
// 	ccvCardForm.value = ccvCardForm.value
// 	// Eliminar espacios en blanco
// 	.replace(/\s/g, '')
// 	// Eliminar todos los caracteres que no sean números del 0 al 9
// 	.replace(/\D/g, '');
	
// 	ccvCard.textContent = ccvCardForm.value;
// });
    const [ value , setValue ] = useState('#### #### #### ####')
	const [name , setName] = useState('name')
    function onChange(event){
        setValue(event.target.value)
    }
	function changeName(event){
		setName(event.target.value)
	}

    return (
        <div class="container">
	<section id="card" class="card">
		<div class="front-card">
			<div id="logo-card" class="logo-card"></div>
			<img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fchip-tarjeta.png?alt=media&token=489dc6be-d75d-47db-b544-e7020041cc90" alt="Chip" title="Chip" class="chip"/>
			<div class="info-card-front">
				<div id="group-number-card" class="group-number-card">
					<p class="label-card">
						Número Tarjeta
					</p>
					
					<p class="number-card">
						{value}
					</p>
				</div>
				
				<div class="flexbox">
					<div id="group-name-card" class="group-name-card">
						<p class="label-card">
							Nombre Tarjeta
						</p>
						
						<p class="name-card">
							{name}
						</p>
					</div>
					
					<div id="group-expiration-card" class="group-expiration-card">
						<p class="label-card">
							Expiración
						</p>
						
						<p class="expiration-card">
							<span class="mounth-expiration-card">
								MM
							</span>
							/
							<span class="year-expiration-card">
								AA
							</span>
						</p>
					</div>
				</div>
			</div>			
		</div>
		
		<div class="back-card">
			<div class="magnetic-bar-card"></div>
			
			<div class="info-card-back">
				<div id="group-firm-card" class="group-firm-card">
					<p class="label-card">
						Firma
					</p>
					
					<div class="firm-card">
						<p>
							John Doe
						</p>
					</div>
				</div>
				
				<div id="group-ccv-card" class="group-ccv-card">
					<p class="label-card">
						CCV
					</p>
					
					<p class="ccv-card"></p>
				</div>
			</div>
			
			<p class="legend-card">
				Lorem ipsum dolor sit amet consectetur
			</p>
			
			<a class="link-bank-card" href="javascript:void(0);">
				www.tubanco.com
			</a>
		</div>
	</section>
	
	
	<div class="ctn-btn">
		<button type="button" id="btn-open-form-card" class="btn-open-form-card">
			<i class="fas fa-plus"></i>
		</button>
	</div>
	
	
	<form action="javascript:void(0);" id="form-card" class="form-card active">
		<div>
			<label for="number-card-form">
				Número Tarjeta				
			</label>
			
			<input onChange={onChange} value = {value} type="text" id="number-card-form" maxlength="19" autocomplete="off"/>
		</div>
		
		<div>
			<label for="name-card-form">
				Nombre				
			</label>
			
			<input onChange={changeName} name = {value} type="text" id="name-card-form" maxlength="20" autocomplete="off"/>
		</div>
		
		<div class="flexbox">
			<div class="group-expiration-card-form">
				<label for="mounth-expiration-card-form">
					 Expiración
				</label>
				
				<div class="flexbox">
					<div class="group-select">
						<select id="mounth-expiration-card-form">
							<option disabled="disabled" selected="selected">
								Mes
							</option>
						</select>
						<i class="fas fa-angle-down"></i>
					</div>
					
					<div class="group-select">
						<select id="year-expiration-card-form">
							<option disabled="disabled" selected="selected">
								Año
							</option>
						</select>
						<i class="fas fa-angle-down"></i>
					</div>
				</div>
			</div>
			
			<div class="group-ccv-card-form">
				<label for="ccv-card-form">
					CCV
				</label>

				<input type="text" id="ccv-card-form" maxlength="3" autocomplete="off"/>
			</div>
		</div>
		
		<button type="submit" class="btn-send-form-card">
			Enviar
		</button>
	</form>
</div>
    )
}

export default  BankCardForm