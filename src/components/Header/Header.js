import React,  { Component }  from 'react';
import logo from './logo.svg'
import './Header.css';

class Header extends Component{
    render (){
        return (
            <header className="header">
                    <h1>Jedi Films Searcher </h1>
                    <img className="logo" src={logo} alt="logo"/>
            </header>
        )
    }
}




export default Header;