import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props); 

        this.state = {
            filtro: "",
            vista: false
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

    
    render(){ 
    return(
        <>
        <header>
            <h1>Título/ Nombre de la app</h1>
            <section>
                {/*<p>Ordenar ASC/ DESC</p>*/}
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form onSubmit= {this.enviarSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(e) => this.cambios(e)}
                        value={this.state.filtro}    
                    ></input>
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </section>
            <button></button>
            <button></button>
        </header>
        </>
        )
    }
}

export default Header; 