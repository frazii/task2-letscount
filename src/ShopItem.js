import React, { useState } from 'react';

function ShopItem(props){
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <button id="decrement-button" 
                onClick={
                    () => {
                        setCount(count-1)
                    }
                }
            >
            −
            </button>
            <div id="number">{count}</div>
            <button id="increment-button" 
                onClick={
                    () => {
                        setCount(count+1)
                    }
                }
            >
            +
            </button>
            
        </div>
    );
}

export default ShopItem;