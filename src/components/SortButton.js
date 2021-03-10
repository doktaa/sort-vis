import React from 'react';
import ReactDOM from 'react-dom';

const SortButton = (props) => {

    function sortClick() {
        alert(props.inputVal)
    }

    return (
            <button onClick={sortClick}>SORT</button>
    )
}

export default SortButton