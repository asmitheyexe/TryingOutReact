import React from 'react'; // import react hooks
import useResources from './useResources';

// Hooks vs Class components
// functional component with hooks approach
const ResourceList = ({resource}) =>{
    
    const resources = useResources(resource);
   
    // returning a list with unordered list and list items
    // map over array and return a li tag for each elm in resources array
    return(
        <div>
            <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
        </div>
    );
    
};

 /*
    Before Refactor of useEffect()..

    const fetchResource = async (resource) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);
   
        Why this works to stop duplicated calls after rendering

        useEffect takes 2 arguments.
            1. Function to execute
            2. dependency
        
        this example:
        useEffect(() => {
            fetchResource(resource); // resource defaulted to 'posts
        }, [resource]); so dependency = 'posts'. also this param isnt required just options. No 2nd arg = always updates

        when we click todos
        that dependency gets changed to 'todos' which react then says okay I can execute that function as it is no longer the same as the previous state.
        in the class component we used if(prevProps.resource !== this.props.resource) to check if previous was different than new and only rerendered if they weren't the same
        this is kind of whats happening
    */



/* class component 
import React from 'react'; // import react hooks
import axios from 'axios';

class ResourceList extends React.Component{
    state = {resources : [] };

    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources: response.data});
    }

    /*
    // Oh the infinite GET calls that get made with this idea....
    async componentDidUpdate(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources: response.data});
    }*//*

    async componentDidUpdate(prevProps){
        if(prevProps.resource !== this.props.resource){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources: response.data});
        }

    }

    render(){
        return(
            <div>
                {this.state.resources.length}
            </div>
        );
    }
}

Hooks varient of this class

import React, {useState, useEffect} from 'react'; // import react hooks
import axios from 'axios';

const ResourceList = ({resource}) =>{
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);


    return(
        <div>
            {resources.length}
        </div>
    );
    
};





*/
export default ResourceList;