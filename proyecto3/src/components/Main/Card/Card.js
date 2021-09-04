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
                text: 'ver menos'
            })            
        }
    }
    render(){
        return(
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left" />
                        <i className="fas fa-chevron-right" />
                    </div>
                    <i className="far fa-window-close" />
                </section>
                <main>
                    <img src="./img/image-default.png" alt />
                    <h3>Título/ Nombre</h3>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque
                    velit minus facere laboriosam voluptatem impedit ea unde labore optio
                    eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint,
                    laboriosam cum.
                    </p>
                    <section className={`adicional ${this.state.viewMore ? 'aditional-info-show' : 'aditional-info'}`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
                        atque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
                        atque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
                        atque.
                    </p>
                    </section>
                    <a onClick={()=>this.viewMore()}>{this.state.text}</a>
                </main>
            </article>
        )
    }
}

export default Card;