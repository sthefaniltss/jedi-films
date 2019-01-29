import React,  { Component }  from 'react';
import './Film.css';

class Film extends Component{
    constructor (props) {
        super(props);
        this.state = { film: false };
    }
     
    render (){
        return (
            <div>
                <main className="film">
                    <article className="film__intro">
                        <h1>
                            Title
                        </h1>
                        <h1>
                            Episódio: <span>episode_id</span>
                        </h1>
                    </article>
                    <section className="film__description">
                        <p>
                            opening_crawl
                        
                        </p>
                        
                    </section>
                    <section className="film__info">
                        <p>
                            Diretor: <span>director</span>
                        </p>
                        <p>
                            Produtores: <span>producer</span>
                        </p>
                        <p>
                            Data de Lançamento: <span>release_date</span>
                        </p>
                    </section>  
                </main>
            </div>
        )
    }
}




export default Film;