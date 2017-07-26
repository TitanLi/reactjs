import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './apple/App';
import registerServiceWorker from './registerServiceWorker';
import RaisedButton from './element/Raised.js'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<RaisedButton />,document.getElementById('raised'));
registerServiceWorker();
