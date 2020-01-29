import React from 'react';

function Hello(props){
    return (
        <p>Hello</p>
    );
}

function Titan(props){
    return (
        <p>Titan</p>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function MulitComponent() {
    return (
        <SplitPane
            left={
                <Hello />
            }
            right={
                <Titan />
            } />
    );
}

export default MulitComponent;