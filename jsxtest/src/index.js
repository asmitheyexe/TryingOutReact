// Import React and ReactDOM libs
import ReactDOM from 'react-dom';
import React from 'react';



// create React Component
const App = () => {
    const buttonText = 'meme';
    const style = {
        backgroundColor:'red', 
        color:'blue'
    };
    return (
        <div>
            <div>hi there</div>
            <input id="input" type="text" />
            <button stlye={style} >{buttonText} </button>
        </div>
     );
};
// Take the react compnent and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
