import React,  { Component }  from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'
import './Header.css';

class Header extends Component{
    constructor (props) {
        super(props);
    }
     
    render (){
        return (
            <header className="header">
                <Link to="/">
                    <h1>Jedi Films Searcher </h1>
                    <img className="logo" src={logo}/>
                </Link>
            </header>
        )
    }
}




export default Header;