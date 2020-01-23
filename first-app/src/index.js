import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWelcome from './AppWelcome';
import AppComment from './AppComment';
import ClassClock from './ClassClock';
import ActionLink from './ActionLink';
import ToggleButton from './ToggleButton';
import LoginControl from './LoginControl';
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

function classClock() {
    ReactDOM.render(
        <ClassClock />,
        document.getElementById('classClock')
    );
}

setInterval(classClock, 1000);

ReactDOM.render(
    <ActionLink />,
    document.getElementById('actionLink')
)

ReactDOM.render(
    <ToggleButton />,
    document.getElementById('toggleButton')
)

ReactDOM.render(
    <LoginControl  isLoggedIn={true}/>,
    document.getElementById('loginControl')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
