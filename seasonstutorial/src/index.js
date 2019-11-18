import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
/**
 * States are scary
 * props != state
 * 
 */
// This is a Class component not a functional one
// class components have the component lifecycle
/**
 * Functional components are great for simple UI components
 * They return a set of HTML based on some given props 
 * 
 * Classes have acces too the following lifecyce functions
 * LifeCycle in order of execution
 * constructor
 *      executes first
 * render
 *      Renders the wanted JSX
 * componentDidMount
 *      Runs after the component is rendered
 * componentDidUpdate
 *      Runs every time the component state changes
 * componenWillUnmount 
 *      Runs when the component leaves the page
 */
class App extends React.Component{
    // how to init a state for a react component easy.
    /*constructor(props){
        super(props);
        this.state = { lat: null, errMsg : ''}; // set state stuff here


    }*/

    // does the same thing as defining a constructor
    // babel will translate this expression into ES5 
    state = {lat:null, errMsg: ''};
    
    componentDidMount(){
        // runs when component is added to the screen
        // best to intialized data in here
        // render() always gets re ran
        console.log('Component rendered to screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                let lati = position.coords.latitude;
                // update values with this.setState
                this.setState({
                    // state variable : new value
                    lat : lati
                })
            },
            (err) =>{
                console.log(err);
                this.setState({
                    errMsg : err.message
                })

            } 
    
        );
    }
    /*
    componentDidUpdate(){
        // runs every time component is updated.
        console.log('component updated');
    }

    componentWillUnmount(){
        runs when component is removed
        good to clean up data here
        console.log('Component unmounting');
    }*/


    // needed for every react component
    // render() is a life cycle method
    // helper functions
    renderContent(){
        if(this.state.lat && !this.state.errMsg){
            // Display the SeasonDisplay Component if we get latitude 
            return(
                <SeasonDisplay latitude={this.state.lat} />
            );
        }else if(!this.state.lat && this.state.errMsg){
            // If the lat is undefined and we have a error message
            return(
                <div>
                    Error: {this.state.errMsg}
                </div>
            );
        }else {
            // This demos how our Spinner component has defaultProps
            // You can not enter anything for the message prop,
            // or you can add your own message.
            return (
              
                <Spinner message="Please give me your location" />
            );
        }
    }
    // Try to only have 1 return statement in the render method
    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

// Render our App component to the #root tag in index.html
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);