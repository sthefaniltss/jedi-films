import React,  { Component }  from 'react';
import Film from '../../pages/Film/Film';
import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import './Home.css';

class Home extends Component{
    constructor (props) {
        super(props);
        this.state = { film: false};
        this.filmRef = React.createRef();
        this.title = '';
    }
    sendData = (event) => {
        event.preventDefault();
        const filmTitle = this.filmRef.current;
        const title = { title: filmTitle.getValue().trim()}
        this.title = title;
        this.changePage();
        
    }
    changePage = () => {
        this.setState({film: true});
    }
    reloadPage = () => {
        this.setState({film: false});
    }

    render (){
        const film = this.state.film;
        return (
            <div>
                <Header  />
                { !film ? (
                    <main className="home">
                        <article className="home__intro">
                            <p>
                                Jedi Films Searcher é um site feito para fãs de StarWars que querem saber informações completas sobre seu episódio favorito. E é muito fácil, se liga!
                            </p>
                        </article>
                        <section className="home__steps">
                            <p>
                                É só digitar o título do seu episódio favorito (em inglês) nessa barra:
                            </p>
                            <form onSubmit={this.sendData} className="home__steps-search">
                                <SearchField id="search" type="text" name="search" ref={this.filmRef} placeholder="Ex: a new hope"/>
                                <button ></button>
                            </form>
                            <p>
                                Ps: Ou você pode tentar usar a força...
                            </p>
                            
                        </section>  
                    </main>
                            ) : 
                            <div className="film">
                                <Film newtitle={this.title}/>
                                <button className="film-btn" onClick={this.reloadPage}></button>
                            </div>
                }
            </div>
        )
    }
}




export default Home;