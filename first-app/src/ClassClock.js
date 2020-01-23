import React from 'react';

class ClassClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // componentDidMount() 方法會在 component 被 render 到 DOM 之後才會執行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // component 從 DOM 被移除會執行 componentWillUnmount() 生命週期方法
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // component local state 的更新
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClassClock;