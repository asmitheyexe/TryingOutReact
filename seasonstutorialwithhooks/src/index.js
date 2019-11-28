import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import useLocation from './useLocation';
const App = () =>{
        const {lat, errorMessage} = useLocation();

        let content;
        if(errorMessage){
            content = <div>Error: {errorMessage}</div>
        }else if(lat){
            content =  <SeasonDisplay latitude={lat} />
        }else{
            content = <Spinner message="Please give me your location" />
        }

        return (
            <div className="border red">
                {content}
            </div>
        );
};

// Render our App component to the #root tag in index.html
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);