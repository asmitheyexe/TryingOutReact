import React from 'react';
/*
// this is all we do to create a context :)
export default React.createContext('english');
/*
To create default values just pass the value straight into the createContext function

values for contexts can be anything
they can be Arrays, JSON objects, String literals, primitive values like 123

React.createContext([1,2,3]);
React.createContext({color:'red'});
React.createContext(5);

All acceptable values, just has to be a valid JavaScript value
*/

const Context = React.createContext('english');

export class LanguageStore extends React.Component{
    state = {language:'english'};
    onLanguageChange = (language) =>{
        this.setState({language});
    }

    render(){
        return(
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}} >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;