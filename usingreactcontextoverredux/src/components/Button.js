import React from 'react';
import LanguageContext from '../contexts/LanguageContext'; // import our context we want
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component{
    // hooking contexts up to component
    // HAS to be contextType it is a special varibale name
    // static contextType adds a contextType directly to our component property/props
    // similar to saying Button.contextType = ?; out side of the component. up to use to decide what we like to do
    // if using a consumer you dont need to do the following
    // static contextType = LanguageContext;

    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
            <LanguageContext.Consumer >
                {({language}) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
        </button>
        );
    }
    render(){

        // Very simple way to change languages for sake of example of contexts
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        //this example shows multiple consumers
        return(
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}
export default Button;
/*
    how consumers work

    Like provider but not
    no value props, this time value is passed into as a argument
    <LanguageContext.Consumer >
        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
    </LanguageContext.Consumer>

    our pipe value is put right into the embedded function(?) 

    why consumer
    If you want to work with >1 context you will need to go down the path of consumers instead of this.context
*/