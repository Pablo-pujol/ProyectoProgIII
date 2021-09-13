import React, { Component } from "react";
import './Header.css'
class Header extends Component{
    constructor(props){
        super(props); 
        this.state = {
            filtro: "",
            vista: false,
            palabra: 'vertical'
        };
    }
    enviarSubmit(e) {
        e.preventDefault();
    }

    cambios(e){
        this.setState({
                filtro: e.target.value,
            },
            () => this.props.filtrarPeliculas(this.state.filtro)
        );
    }
    orientacion(){
        if(this.state.vista){
            console.log('toco falso');

            this.setState({
                vista: false,
                palabra: 'vertical'
            },
            () => this.props.sentido(this.state.vista))
        } else {
            console.log('toco');
            this.setState({
                vista: true,
                palabra: 'horizontal',

            },
            () => this.props.sentido(this.state.vista))            
        }
        this.props.sentido(this.state.vista)
    }
    
    render(){ 
    return(
        <>
        <header className='header'>
            <h1>Título/ Nombre de la app</h1>
            <section>
                {/*<p>Ordenar ASC/ DESC</p>*/}
                {/*<i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>*/}
                <form onSubmit= {this.enviarSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(e) => this.cambios(e)}
                        value={this.state.filtro}    
                    ></input>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </section>
            <div className='orientacion'> 
                <a onClick={()=> this.orientacion()}>{this.state.palabra}</a>
            </div>
        </header>
        </>
        )
    }
}

export default Header; 