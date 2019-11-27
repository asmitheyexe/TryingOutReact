import {useState, useEffect} from 'react'; // import react hooks
import axios from 'axios';

// hook logic
const useResources = (resource) =>{
    const [resources, setResources] = useState([]);

    // Different way if you do not want to make a function outside of useEffect to call
    // Not as clean syntax
    // What is going on? well..
    // You have arrow functions declared like () => {}. You can wrap that entire arrow function with () then add another set of () to immedialy invoke it
    // (() => {} )() this is like
    // so (() => console.log('invoked'))(); will immediatly call the console log
    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
                setResources(response.data);
        })(resource); // invoke immediatly
    }, [resource]);

    return resources;
};

export default useResources;