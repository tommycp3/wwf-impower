import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
