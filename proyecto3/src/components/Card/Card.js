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
                <main className={`${this.props.estado ? 'movie-card-columna':'movie-card'}`}>
                
                    <div className={`${this.props.estado ? 'textocarta':'textocarta-alt'}`}>
                    <img src={'https://image.tmdb.org/t/p/w342' + poster_path}  alt="" />
                       <div className="mastexto"> 
                            <h3>{title}</h3>
                            <p className="description">{overview}</p>
                            <section className={`${this.state.viewMore ? 'aditional-info-show' : 'aditional-info'}`}>
                            <p>Fecha de estreno: {release_date}</p>
                            <p>Idioma original: {original_language}</p>
                            <p>Popularidad: {popularity}</p>
                            </section>  
                            </div>
                    </div>
                    <div>
                            <a className='ver' onClick={()=>this.viewMore()}>{this.state.text}</a>
                            <button onClick={()=> this.props.borrar(id)} className= {`${this.props.estado ? 'borrar-columna':'borrar'}`}><i class="far fa-trash-alt"></i></button>
                    </div>
                </main>
            </article>
        )
    }
}

export default Card;