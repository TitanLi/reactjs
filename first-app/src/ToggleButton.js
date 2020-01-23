import React from 'react';
// 請特別注意 this 在 JSX callback 中的意義。在 JavaScript 中，
// class 的方法在預設上是沒有被綁定（bound）的。如果你忘了綁定 
// this.handleClick 並把它傳遞給 onClick 的話，this 的值將會在該
// function 被呼叫時變成 undefined。

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的
        // 可參考：https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        console.log(data);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // 可將參數傳至function
            <button onClick={this.handleClick.bind(this,'apple')}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default ToggleButton;