import React from 'react';

function ActionLink() {
    function handleClick(e) {
        // 避免連結開啟新頁的預設功能
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        // onClick function name
        <a href="#" onClick={handleClick}>
            Click me
      </a>
    );
}

export default ActionLink