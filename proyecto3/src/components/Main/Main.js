import React, {Component} from 'react';
import Card from '../Card/Card';
import Header  from '../Header/Header'
import './Main.css'


class Main extends Component {
    constructor(){
        super();
        this.state = {
            peliculas: [],
            cargando: false,
            nexturl: "",
            pagina: 1, 
            pelisOriginales: [],
            contenedor: false,
            pelisResetear: []
        }
    }


    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=23ccfe41a7aa18ada3baf01a105eb137&language=en-US&page=1' 
        fetch (url)
            .then((respuesta)=> respuesta.json())
            .then(data=>{
                this.setState({ 
                    peliculas: data.results,
                    pelisOriginales: data.results,
                    pelisResetear : data.results,
                    cargando: true,
                    nexturl:  this.state.pagina + 1,
                });
                console.log(data);
            })
            .catch((error) => console.log(error));
    }
    deleteCard(id){
        const otros = this.state.peliculas.filter(pelicula => pelicula.id != id)
        this.setState({
            peliculas : otros,
            pelisOriginales: otros
        })
    }
    filtrarPeliculas(textoFiltro){
        let peliculasFiltradas = this.state.pelisOriginales.filter((pelicula) => 
        pelicula.title.toLowerCase().includes(textoFiltro.toLowerCase())
        );
        
        this.setState({
            peliculas: peliculasFiltradas,
        });
    }
    cargarMasPeliculas(){

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=23ccfe41a7aa18ada3baf01a105eb137&language=en-US&page=${this.state.pagina + 1}`
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then(data => {
            this.setState({
                pagina: this.state.pagina + 1,
                peliculas: this.state.peliculas.concat(data.results),  
                pelisOriginales : this.state.pelisOriginales.concat(data.results)
            })
        })
        .catch((error) => console.log(error))
       
    }
    sentido(p){
        this.setState({
            contenedor: p
        })
    }

    resetear (){
        this.setState({
            peliculas: this.state.pelisResetear,
            pagina: 1
        })
    }
    
    render(){
        return (
            <>
                <Header filtrarPeliculas={(parametro)=> this.filtrarPeliculas(parametro)} 
                        sentido={(p)=> this.sentido(p)}
                       
                />
                
                <div className = "main">
                    <button onClick={() => this.cargarMasPeliculas()} type="button" className = "button">Cargar más tarjetas</button>
                    <button onClick={() => this.resetear()} type="button" className = "button">resetear</button>
                    <main className= {`${this.state.contenedor ? 'contenedor-columna':'contenedor'}`}>
                    {this.state.cargando === false ? 
                    <p>Cargando</p>: 
                    this.state.peliculas.map((pelicula) => 
                    <Card
                    estado={this.state.contenedor}
                    key={pelicula.id}
                    datosPelicula={pelicula}
                    borrar = {(peliculaABorrar)=> this.deleteCard(peliculaABorrar)}
                    />
                    )
                    }
                    </main>
                </div>
                {this.state.peliculas.length == 0 ? <p className="resultado-"> No hay datos que coincidan con su búsqueda </p> : ""}
            </>
        )
    }
}
export default Main;