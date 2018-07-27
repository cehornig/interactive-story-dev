import React, { Component } from 'react';
import Choices from './Choices.js';
import './index.css';

const Block = (props) => {
    if (props.entryText) {
       return(
        <div>
           <form onSubmit={props.onSubmit}>
                {props.currentBlock}
                <input type="text" value={props.value} onChange={props.onChange} />
                <input type="submit" value="Submit" onSubmit={props.handleSubmit}></input>
           </form>
        </div>
       );  
    }
    
	return (
		<div>
			{props.currentBlock}
            This is your name: {props.name}
			<Choices choices={props.choices} onClick={props.onClick} />
		</div>
	);			
}

export default Block;