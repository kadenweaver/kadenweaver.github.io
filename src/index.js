import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import Scoresheet from './Scoresheet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <HashRouter>
        <div className = "app">
            <Route exact path = "/" component={App} />
            <Route exact path = "/scoresheet" component={Scoresheet} />          
        </div>
    </HashRouter>
    ), document.getElementById('root'));

        
registerServiceWorker();
