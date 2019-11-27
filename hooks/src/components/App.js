import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
/**
 * some hooks for react
 * 
 * Name         |           Goal
 * 
 * useState     |    Allow a functional component to use component level state
 * useEffect    |   Allow a function component to use 'life-cycle methods similar to componentDidMount/unmount/update...)
 * useContext   |   Allow a functional component to use context system
 * useRef       |   Allow a functional component to use ref System
 * useReducer   |   Allow functional component to store data through a 'reducer'
 * 
 */
const App = () =>{
    // how to use state in functional components
    // Example of ARRAY destructuring
    // TL:DR if you do the following it will assign the index 0 -> x of destructured properties -
    //      so below we take the first 2 indexs of useState and put index 0 into resource and 1 into setResource
    const [resource, setResource] = useState('posts');

    // first value in that array above represents current value kinda
    // the 2nd variable in the array is a setter for that first value
    // calling setResouce causes a re-render

    return(
        
        <div className="ui container">
            <div>
            <UserList />
                <button 
                    onClick={() => setResource('posts')}>
                        Posts
                </button>
                <button 
                    onClick={() => setResource('todos')}>
                        Todos
                </button>
            </div>
            <ResourceList resource ={resource}/>
        </div>
    );   
}

export default App;