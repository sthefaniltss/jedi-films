import React,  { Component }  from 'react';
import './Film.css';

class Film extends Component{
    constructor (props) {
        super(props);
        this.state = { film: false, filmTitle: [], filmData: {} };
        this.teste = '';
    }

    componentDidMount(){
        //this.setState({filmTitle: this.props.newtitle});
        this.teste = this.props.newtitle;
        this.search();
    }
    search = () =>{
        fetch(`https://swapi.co/api/films/?search=${this.teste.title}`).then(response =>{ 
            return response.json();
        }).then(data => {
            this.setState({filmData : data.results[0]});
        })
    }
    render (){
        return (
            <div newtitle={this.props.newtitle}>
                <main className="film">
                    <article className="film__description">
                        <p>
                            <h1>
                                {this.state.filmData.title}
                            </h1>
                            <h2>
                                Episode {this.state.filmData.episode_id}
                            </h2>
                            {this.state.filmData.opening_crawl}
                        </p>
                    </article>
                    <section className="film__info">
                        <div>
                            <h1>
                                Informações do Filme
                            </h1>
                        </div>
                        <div className="film__info-data">
                            <p>
                                Título: <span> {this.state.filmData.title}</span>
                                
                            </p>
                            <p>
                                Episódio: <span> {this.state.filmData.episode_id}</span>
                            </p>
                            <p>
                                Diretor: <span> {this.state.filmData.director}</span>
                            </p>
                            <p>
                                Produtores: <span> {this.state.filmData.producer}</span>
                            </p>
                            <p>
                                Data de Lançamento: <span> {this.state.filmData.release_date}</span>
                            </p>
                        </div>
                        
                    </section>  
                </main>
            </div>
        )
    }
}




export default Film;