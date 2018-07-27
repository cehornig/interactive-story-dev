import React, { Component } from 'react';
import Choices from './Choices.js';
import './styles/Block.css';
import './index.css';

const Block = (props) => {
    if (props.entryText) {
       return(
        <div id="block-div">
                {props.currentBlock}
                <input type="text" value={props.value} onChange={props.onChange} />
                <button value="Submit" onClick={props.onSubmit}>Submit</button>
        </div>
       );    
    }
    
	return (
        <div id="block-div">
			     {props.currentBlock}
                 This is your name: {props.name}
			     <Choices choices={props.choices} onClick={props.onClick} />
        </div>
	);			
}

export default Block;