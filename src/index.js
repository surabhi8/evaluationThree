import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App/App';
import './index.css';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
