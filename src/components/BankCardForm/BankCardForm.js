import './BankCardForm.css'
import { useState } from 'react'
import classNames from 'classnames/bind';


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
// 	if ( card.classNameList.contains('active') ) {
// 		card.classNameList.remove('active');
// 	}
// }

// // Rotación de la tarjeta
// card.addEventListener('click', () => {
// 	card.classNameList.toggle('active');
// });

// // Abrir formulario
// btnOpenForm.addEventListener('click', () => {
// 	btnOpenForm.classNameList.toggle('active');
// 	formCard.classNameList.toggle('active');
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
// 	if ( !card.classNameList.contains('active') ) {
// 		card.classNameList.add('active');
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
	const [selected, setSelected] = useState('selected')
	const [active, setActive] = useState(false)
	const [activeForm, setActiveForm] = useState(true)
	const [month, setMonth] = useState('MM')
	const [year , setYear] = useState('AA')
	const [ccv , setCcv] = useState('')
    function onChange(event){
        setValue(event.target.value)
		setActive(false)
    }
	function changeName(event){
		setName(event.target.value)
		setActive(false)
	}
	function changeSelected(event){
		setSelected(event.target.value)
	}
	function changeActive(){
		setActive(!active)
	}
	function changeActiveForm(){
		setActiveForm(!activeForm)
	}
	function changeMonth(event){
		setMonth(event.target.value)
		setActive(false)
	}
	function changeYear(event){
		setYear(event.target.value)
		setActive(false)
	}
	function changeCcv(event){
		setCcv(event.target.value)
		setActive(true)
	}

    return (
        <div className="container">
	<section id="card" onClick={changeActive}  className={classNames('card',{active: active})}>
		<div className="front-card">
			<div id="logo-card" className="logo-card"></div>
			<img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Fchip-tarjeta.png?alt=media&token=489dc6be-d75d-47db-b544-e7020041cc90" alt="Chip" title="Chip" className="chip"/>
			<div className="info-card-front">
				<div id="group-number-card" className="group-number-card">
					<p className="label-card">
						Número Tarjeta
					</p>
					
					<p className="number-card">
						{value}
					</p>
				</div>
				
				<div className="flexbox">
					<div id="group-name-card" className="group-name-card">
						<p className="label-card">
							Nombre Tarjeta
						</p>
						
						<p className="name-card">
							{name}
						</p>
					</div>
					
					<div id="group-expiration-card" className="group-expiration-card">
						<p className="label-card">
							Expiración
						</p>
						
						<p className="expiration-card">
							<span className="mounth-expiration-card">
								{month}
							</span>
							/
							<span className="year-expiration-card">
								{year}
							</span>
						</p>
					</div>
				</div>
			</div>			
		</div>
		
		<div className="back-card">
			<div className="magnetic-bar-card"></div>
			
			<div className="info-card-back">
				<div id="group-firm-card" className="group-firm-card">
					<p className="label-card">
						Firma
					</p>
					
					<div className="firm-card">
						<p>
							{name}
						</p>
					</div>
				</div>
				
				<div id="group-ccv-card" className="group-ccv-card">
					<p className="label-card">
						CCV
					</p>
					
					<p className="ccv-card">{ccv}</p>
				</div>
			</div>
			
			<p className="legend-card">
				Lorem ipsum dolor sit amet consectetur
			</p>
			
			<a className="link-bank-card" href="">
				www.tubanco.com
			</a>
		</div>
	</section>
	
	
	<div className="ctn-btn">
		<button onClick={changeActiveForm} type="button" id="btn-open-form-card" className="btn-open-form-card">
			<i className="fas fa-plus"></i>
		</button>
	</div>
	
	
	<form action="" id="form-card"    className={classNames('form-card',{active: activeForm})}>
		<div>
			<label htmlFor="number-card-form">
				Número Tarjeta				
			</label>
			
			<input onChange={onChange} value = {value} type="text" id="number-card-form" maxLength="19" autoComplete="off"/>
		</div>
		
		<div>
			<label htmlFor="name-card-form">
				Nombre				
			</label>
			
			<input onChange={changeName} name = {value} type="text" id="name-card-form" maxLength="20" autoComplete="off"/>
		</div>
		
		<div className="flexbox">
			<div className="group-expiration-card-form">
				<label htmlFor="mounth-expiration-card-form">
					 Expiración
				</label>
				
				<div className="flexbox">
					<div className="group-select">
						<select  onChange={changeMonth} selected={selected} id="mounth-expiration-card-form">
							<option value={"Mes"} disabled >
								mes
							</option>
							{
								new Array(12).fill(0).map((item, index)=>index+1).map((item, index) => {
									return <option key={item} value={item}>{item}</option>
								})
							}
							
						</select>
						<i className="fas fa-angle-down"></i>
					</div>
					
					<div className="group-select">
						<select onChange={changeYear} selected={selected} id="year-expiration-card-form">
							<option value={"ANO"} disabled >
								ano
							</option>
							{
								new Array(9).fill(2023).map((item, index)=>item+index).map((item, index) => {
									return <option key={item} value={item}>{item}</option>
								})
							}
						</select>
						<i className="fas fa-angle-down"></i>
					</div>
				</div>
			</div>
			
			<div className="group-ccv-card-form">
				<label htmlFor="ccv-card-form">
					CCV
				</label>

				<input onChange={changeCcv} type="text" id="ccv-card-form" maxLength="3" autoComplete="off"/>
			</div>
		</div>
		
		<button type="submit" className="btn-send-form-card">
			Enviar
		</button>
	</form>
</div>
    )
}

export default  BankCardForm