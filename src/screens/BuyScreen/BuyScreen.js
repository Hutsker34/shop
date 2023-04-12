import  './BuyScreen.css'
import BankCardForm from '../../components/BankCardForm/BankCardForm'
import Header from '../../components/Header/Header'
import axios from 'axios'
import React from 'react'

class BuyScreen extends React.Component{
    state = { details : [], }

    componentDidMount(){
        let data;
        axios.get('http://127.0.0.1:8000/card/')
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return(
        <>
            <Header/>
            <BankCardForm/>
            {this.state.details.map((output, id) => (
                <div key={id}>
                    <p>{output.cardNumber}</p>
                    <p>{output.name}</p>
                    <p>{output.month}</p>
                    <p>{output.year}</p>
                    <p>{output.ccv}</p>
                </div>
            ))}
        </>
    )
}
}

export default  BuyScreen