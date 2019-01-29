import React,  { Component }  from 'react';
import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import './Home.css';

class Home extends Component{
    constructor (props) {
        super(props);
    }
     
    render (){
        return (
            <div>
                <Header/>
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
                        <SearchField placeholder="Ex: a new hope"/>
                        <p>
                            Ps: Ou você pode tentar usar a força...
                        </p>
                        
                    </section>  
                </main>
            </div>
        )
    }
}




export default Home;