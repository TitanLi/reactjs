import React from 'react';

function ListItem(props) {
    // Key 的功能是提示 React，但它們不會被傳遞到你的 component。
    // 如果你在 component 中需要同樣的值，
    // 你可以直接把這個值用一個不同的名稱作為 prop 傳下去
    // 正確！你不需要在這裡指出 key：
    return <li>{props.value}</li>;
}

function MapList(props) {
    // [1, 2, 3, 4]
    const numbers = props.number;
    const listItems = numbers.map((number) =>
        // 正確！你需要在 array 裡指出 key：
        <ListItem key={number.toString()}
            value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default MapList;