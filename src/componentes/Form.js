import { useReducer } from 'react';
import "../estilos/formulario.css";

const initialState = {
           
    texto: '',         
    verificacionEmail: false,  
    verificacionPassword: false,
  };  

const reducer = (state, action) =>{
    switch(action.type){
        case "setTexto":
            return {...state, texto: action.payload};
        case "setVerificacionEmail":
            return {...state, verificacionEmail: !state.verificacionEmail}
        case "setVerificacionPassword":
            return {...state, verificacionPassword: !state.verificacionPassword}
        default:
            return state;

    }
}

const Form = ()=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    const isValid = state.verificacionEmail && state.verificacionPassword;
    function changeEmailHandler(event) {
    dispatch({type: "setTexto", payload:event.target.value})
    if(state.texto.includes("@")){
        dispatch({type: "setVerificacionEmail"})
    }
    }

    function changePasswordHandler(event) {
        dispatch({type: "setTexto", payload:event.target.value})
        if(state.texto.length > 7){
            dispatch({type: "setVerificacionPassword"})
        }
    }

    function submitFormHandler(event) {
    event.preventDefault();
    if (!isValid) {
    alert('Invalid form inputs!');
    return;
    }
    console.log('Good job!');
    
    }

    return (
    <form className={"form"} onSubmit={submitFormHandler}>
        <div className={"control"}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={changeEmailHandler} />
        </div>
        <div className={"control"}>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={changePasswordHandler} />
        </div>
        <button>Submit</button>
    </form>
    );
}
export default Form;