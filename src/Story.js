import React, { Component } from 'react';
import Block from './Block.js';
import allText from './allText.js';
import './index.css';

class Story extends Component {
    constructor(props) {
        super(props);
	
	this.state = {
		currentBlock: allText.startText.entryText,
		choices: null,
        entryText: true,
        value: "",
        name: ""
	};
       
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
        
    }
    
    handleSubmit(e) {
        if (this.state.value == "") {
            return;    
        }
        
        this.setState({
            value: "",
            name: this.state.value,
        });
        
        this.handleChoice(e);
    }
    
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }
    
    handleChoice(e) {  
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        let option = e.target.value;
        
        if (option == "end") {
           	this.setState({
                currentBlock: allText.startText.entryText,
			    choices: null,
                entryText: true,
		    });
            
            return;
            
        } else if (this.state.entryText) {
            
            this.setState({
                currentBlock: allText.startText,
			    choices: allText.startText.choices,
                entryText: false,
		    });
             
        } else {
            const newChoices = this.state.currentBlock[option].choices;
        
		    this.setState({
			     currentBlock: this.state.currentBlock[option],
			     choices: newChoices,
                 entryText: false,
		    });
        } 
	}

	render() {  
        const visible = this.state.visible;
        
		return (
                <Block currentBlock={this.state.currentBlock} choices={this.state.choices} entryText={this.state.entryText} value={this.state.value} onClick={this.handleChoice} onChange={this.handleChange} onSubmit={this.handleSubmit} name={this.state.name}/>
		);
	}
}

export default Story;
