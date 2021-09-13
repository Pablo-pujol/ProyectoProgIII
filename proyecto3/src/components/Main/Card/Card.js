import React, {Component} from 'react';
import './Card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text:'Ver más',
            
           
        }
    }
   
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })            
        }
    }

    render(){
        const { poster_path, title, original_language, overview, release_date, id, popularity } = this.props.datosPelicula;
        return(
            <article>
                {/*<section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left" />
                        <i className="fas fa-chevron-right" />
                    </div>
                    <i className="far fa-window-close" />
                </section>*/}
                <main className='movie-card'>
                    <img src={'https://image.tmdb.org/t/p/w342' + poster_path}  alt="" />
                    <h3>{title}</h3>
                    <p className="description">{overview}</p>
                    <section className={`adicional ${this.state.viewMore ? 'aditional-info-show' : 'aditional-info'}`}>
                    <p>Fecha de estreno: {release_date}</p>
                    <p>Idioma original: {original_language}</p>
                    <p>Popularidad: {popularity}</p>
                    </section>
                    <a className='ver' onClick={()=>this.viewMore()}>{this.state.text}</a>
                    <button onClick={()=> this.props.borrar(id)}>Borrar</button>
                </main>
            </article>
        )
    }
}

export default Card;