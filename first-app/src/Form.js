import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '' };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 每一次鍵盤被敲擊時都會被執行
    handleChange1(event) {
        this.setState({ value1: event.target.value });
    }

    // 每一次鍵盤被敲擊時都會被執行
    handleChange2(event) {
        // 強制輸入為大寫
        this.setState({ value2: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        alert('value1: ' + this.state.value1 + '\nvalue2: ' + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value1} onChange={this.handleChange1} />
                    <input type="text" value={this.state.value2} onChange={this.handleChange2} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;