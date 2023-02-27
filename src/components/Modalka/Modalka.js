import './Modalka.css'


function Modalka(props){
    function clickYes(){
        props.ale() 
        props.setVisible(false)
    }
    if(!props.visible){
        return null
    }
    return(
        <div className='modal'>
            <div className='modal__window'>
                <p>are you sure?</p>
                <button onClick = {clickYes}>yes</button>
                <button onClick = {() => props.setVisible(false)}>X</button>
            </div>
        </div>       
    )     
}

export default Modalka