import React, { Component } from 'react';
import Choices from './Choices.js';
import './styles/Block.css';
import './index.css';

const Block = (props) => {
    if (props.entryText) {
       return(
           <div id="block-div">
                <div className="centered welcome">
                    {props.currentBlock.text.header}
                </div>
                {<br/>}
                <div className="centered byline">
                    {props.currentBlock.text.byline}
                </div>
                {<br/>}
                {<br/>}
                <div className="centered main-text">
                    {props.currentBlock.text.begin}
                </div>
                {<br/>}
                {<br/>}
                <input type="text" value={props.value} onChange={props.onChange} />
                <button className="submit" value="Submit" onClick={props.onSubmit}>Start!</button>
            </div>
       );    
    }
    
    let stringArr = props.currentBlock.text.split("(name)");
    let newStringArr = [];
    
    for (let i = 0; i < stringArr.length; i++) {
        if (i < stringArr.length - 1) {
            newStringArr.push(<span key={i}>{stringArr[i]}{props.name}</span>);
        } else {
            newStringArr.push(<span key={i}>{stringArr[i]}</span>);
        }
    }
    
	return (
            <div id="block-div" className="main-text">
			     {newStringArr}
			     <Choices choices={props.choices} onClick={props.onClick} />
            </div>
	   );			
    }

export default Block;