import React,  { Component }  from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{
    constructor (props) {
        super(props);
    }
     
    render (){
        return (
            <header className="header">
                <Link to="/">
                    <h1>Jedi Films</h1>
                </Link>
            </header>
        )
    }
}




export default Header;