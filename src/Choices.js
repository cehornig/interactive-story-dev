import React, { Component } from 'react';
import './styles/Choices.css';
import './index.css';

const Choices = (props) => {
    
    let choiceArr = [];
    
    for (let option in props.choices) {
        choiceArr.push(<button value={option} onClick={props.onClick} key={option}>{props.choices[option]}</button>);
    }
    
    return(
	   <div id="choice-div">
                {choiceArr}
	   </div>
    );
}

export default Choices;