import React, {Component, useState}from "react";


/* Esto es un componente basado en una Clase, tiene sus contrusctores y metodos */
class ContadorClase extends Component{
    constructor(props){
        super(props);
        this.state = {conteo:0};
    }

    incrementar = () => {
        this.setState((prevState) => ({conteo: prevState.conteo + 1}));
    };

    reducir = () => {
        this.setState((prevState) => ({conteo: prevState.conteo - 1}));
    };

    render(){

        const {conteo}=this.state;
        return(
            <div>
                <h1>Contador de click</h1>
                <p>conteo: {conteo}</p>
                <button onClick={this.incrementar}> Sumar click</button>
                <button onClick={this.reducir}> Restar click</button>
            </div>
        );
    }
}

/* Esto seria lo mismo pero basado en un funcion,usando Hook useState */
const ContadorClaseDa = () =>{

    const [conteo, setConteo] = useState(0)

    const incrementar =()=>{
        setConteo(prevConteo => prevConteo+1)
    }

    const reducir =()=>{
        setConteo(prevConteo => prevConteo-1)
    }

    return(
        <div>
                <h1>Contador de click</h1>
                <p>conteo: {conteo}</p>
                <button onClick={incrementar}> Sumar click</button>
                <button onClick={reducir}> Restar click</button>
            </div>
    )
}

export default ContadorClaseDa