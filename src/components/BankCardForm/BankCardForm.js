import './BankCardForm.css';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useCreditCardValidator} from 'react-creditcard-validator';
import axios from 'axios';



function BankCardForm() {
	const date = new Date()
    const [ value , setValue ] = useState('')
	const [name , setName] = useState('name')
	const [selected, setSelected] = useState('selected')
	const [active, setActive] = useState(false)
	const [activeForm, setActiveForm] = useState(true)
	const [month, setMonth] = useState(date.getMonth())
	const [year , setYear] = useState(date.getFullYear())
	const [ccv , setCcv] = useState('')
	

	const {
		getCardNumberProps,
		// meta: { erroredInputs }
	} = useCreditCardValidator();
	

    
	function changeName(event){
		setName(event.target.value)
		setActive(false)
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
	function getProps(event){
		event.preventDefault();
		
		axios.post('http://127.0.0.1:8000',{
			cardNumber: value,
			name: name,
			month: month,
			year: year,
			ccv: ccv
		})
		.then(res => {
			console.log(res);
		})
		.catch(err =>{
			console.log(err)
		})
	}


	const obj = getCardNumberProps()
	const {onChange: onCardChange,...rest} = obj

	function onChange(event){
		onCardChange(event)
        setValue(event.target.value)
		setActive(false)
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
						Card number
					</p>
					
					<p className="number-card">
						{value}
					</p>
				</div>
				
				<div className="flexbox">
					<div id="group-name-card" className="group-name-card">
						<p className="label-card">
							Card name
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
				Card Number				
			</label>
			
			<input 
				// onChange={onChange} 
				// value = {value} 
				id="number-card-form" 
				maxLength="19" 
				autoComplete="off"
				{...rest}
				onChange={onChange}
			/>
		</div>
		
		<div>
			<label htmlFor="name-card-form">
				Name			
			</label>
			
			<input
				onChange={changeName} 
				name = {value} 
				type="text" 
				id="name-card-form" 
				maxLength="20" 
				autoComplete="off"
			/>
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
				<input 
					type="text" 
					id="ccv-card-form" 
					autoComplete="off"
					onChange={changeCcv}
					maxLength={3}
				/>
			</div>
		</div>
		
		<button  onClick={getProps} type="submit" className="btn-send-form-card">
			Enviar
		</button>
	</form>
</div>
    )
}

export default  BankCardForm