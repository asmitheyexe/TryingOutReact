import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{
    state = { language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language});
    };


    
    render(){
        return(
            <div className="ui container">
                <div>
                    Select a language: 
                    <i onClick={() => this.onLanguageChange('english')} className="flag us" />
                    <i onClick={() => this.onLanguageChange('dutch')} className="flag nl" />
                </div>
                <ColorContext.Provider value="green">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
/*
    Very weird syntax for the Provider in the context system
    To assign a new value in our context we wrap the element that has the nested element using the context 
    <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
    </LanguageContext.Provider>

    So import your context, make a tag with the context class name so LanguageContext and add .Provider to it
    <LanguageContext.Provider>
    </LanguageContext.Provider>

    This tag has a prop called value={} which we can use to update the value of that context

    <LanguageContext.Provider value={this.state.language}>
    </LanguageContext.Provider>

    Consider:
    <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
    </LanguageContext.Provider>

    <LanguageContext.Provider value="english">
        <UserCreate />
    </LanguageContext.Provider>

    in this case the first LanguageContext tag will render as expected
    but the 2nd will stay english, each tag creates its own pipe of info, nothing is shared among sibling tags, just child tags get the new provider info

*/