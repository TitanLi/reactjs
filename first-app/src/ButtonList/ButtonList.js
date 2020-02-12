import React from 'react';
import MacList from './MacList';

class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            macList: ['1', '2', '3', '4'],
            selectMac: ''
        };
        this.handleSelectMac = this.handleSelectMac.bind(this);
    }

    handleSelectMac(event) {
        // 取得List
        const selectMac = event.currentTarget.getAttribute('value');
        console.log(selectMac);
        const copy = selectMac.concat();
        this.setState({ selectMac: copy });
    }

    render() {
        return (<MacList mac={this.state.macList} handleSelectMac={this.handleSelectMac} />)
    }
}

export default ButtonList;