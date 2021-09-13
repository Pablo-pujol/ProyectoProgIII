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
        <header className="main-header">
        <div className="container">
            <div className="row align-items-center">
            <h1 className = "titulo">MovieFan</h1>
            <section className="row2 align-items-center">
            <article class="botton">
                <div className='orientacion'> 
                <a onClick={()=> this.orientacion()}>{this.state.palabra}</a>
            </div>
            </article>
                {/*<p>Ordenar ASC/ DESC</p>*/}
                {/*<i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>*/}
                <form onSubmit= {this.enviarSubmit} className="search-form">
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(e) => this.cambios(e)}
                        value={this.state.filtro}  
                        className="search-form_input"  
                        placeholder="Buscar pelicula"  
                    ></input>
                    <button type="submit" className="search-form_button"><i className="fas fa-search"></i></button>
                </form>
                
            </section>
            
            </div>
            </div>
        </header>
        </>
        )
    }
}

export default Header; 