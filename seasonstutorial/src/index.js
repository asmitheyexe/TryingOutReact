import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
/**
 * States are scary
 * props != state
 * 
 */
class App extends React.Component{
    // how to init a state for a react component easy.
    // constructor(props){
    //     super(props);
    //     this.state = { lat: null, errMsg : ''}; // set state stuff here


    // }
    // does the same thing as defining a constructor
    // babel will translate this expression into ES5 
    state = {lat:null, errMsg: ''};
    
    componentDidMount(){
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
        console.log('component updated');
    }

    componentWillUnmount(){
        console.log('Component unmounting');
    }*/
    // needed for every react component
    // render() is a life cycle method
    /**
     * constructor
     * render
     * componentDidMount
     * componentDidUpdate
     * componenWillUnmount
     */
    render(){
        if(this.state.lat && !this.state.errMsg){
            return(
                <SeasonDisplay latitude={this.state.lat} />
            )
        }else if(!this.state.lat && this.state.errMsg){
            return(
                <div>
                    Error: {this.state.errMsg}
                </div>
            )
        }else {
            return (
                <Spinner />
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);