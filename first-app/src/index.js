import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWelcome from './AppWelcome';
import AppComment from './AppComment';
import * as serviceWorker from './serviceWorker';

function tick() {
    ReactDOM.render(<App />, document.getElementById('root'));
}
setInterval(tick, 1000);

ReactDOM.render(
    <AppWelcome />,
    document.getElementById('say')
);

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <AppComment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('comment')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
