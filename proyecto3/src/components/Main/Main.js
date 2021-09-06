import React, {Component} from 'react';
import Card from './Card/Card'


class Main extends Component {
    constructor(){
        super();
        this.state = {
            peliculas: []
        }
    }


    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=23ccfe41a7aa18ada3baf01a105eb137&language=en-US&page=1        '
        fetch (url)
            .then((respuesta)=> respuesta.json())
            .then(data=>{
                this.setState({ 
                    peliculas: data.results,
                });
                console.log(data);
            })
            .catch((error) => console.log(error));
    }
    render(){
        return (
            <div>
                <main>
                   <button type="button">Cargar más tarjetas</button>
                  {this.state.peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                datosPelicula={pelicula}
              />
            ))
          }
                 </main>
             </div>
        )
    }
}
export default Main;