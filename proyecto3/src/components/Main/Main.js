import React, {Component} from 'react';
import Card from './Card/Card';
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
            peliculas : otros
        })
    }
    filtrarPeliculas(textoFiltro){
        let peliculasFiltradas = this.state.peliculas.filter((pelicula) => 
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
                peliculas: this.state.peliculas.concat(data.results)        
            })
        })
        .catch((error) => console.log(error))
       
    }
    sentido(p){
        this.setState({
            contenedor: p
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
                    <main className= {`${this.state.contenedor ? 'contenedor-columna':'contenedor'}`}>
                    {this.state.cargando === false ? 
                    <p>Cargando</p>: 
                    this.state.peliculas.map((pelicula) => 
                    <Card
                    key={pelicula.id}
                    datosPelicula={pelicula}
                    borrar = {(peliculaABorrar)=> this.deleteCard(peliculaABorrar)}
                    />
                    )
                    }
                    </main>
                </div>
            </>
        )
    }
}
export default Main;