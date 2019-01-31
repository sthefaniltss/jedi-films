import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
    
    constructor (props){
        super(props);
        this.newValue = '';
        
    }
    getValue = () => {
        return this.newValue;
    }

    validate = (event) => {
        const input = event.target;
        const {value} = input;
        this.newValue = value;
    }
    render(){

        
        return (
                <div>
                    <input 
                        className="search-field" 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder}
                        onChange={this.validate}
                    />
                    
                </div>
                
                
                )
    }
    
    
}

export default SearchField;