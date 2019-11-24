import React from 'react';
import { connect} from 'react-redux';
import {signIn, signOut} from '../components/actions';

// wrapper class to gapi in window scope
class GoogleAuth extends React.Component{    
    componentDidMount(){
        window.gapi.load('client:auth2', () => {// callback
            window.gapi.client.init({ // async function so returns a promise
                clientId:
                '13979989091-6m6fmtq8bgmlq446vd4hq5fqbciof0au.apps.googleusercontent.com',
                scope:'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); // gapi only accessable on window scope
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    onAuthChange = isSignedIn =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )

        }else{
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn : state.auth.isSignedIn
    }
};

export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);

/**
 * 
 * Using Gapi in console
 * 
 * gapi.load('client:auth2'); // request for the JS for OAuth library
 * // thiss adds the auth2 stuff to gapi object
 * gapi.client.init({clientId: 'clientId'});
 */