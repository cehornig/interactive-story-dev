import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Story from './Story.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Story />, document.getElementById('root'));
registerServiceWorker();