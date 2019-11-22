import React from 'react';
import {fetchUser} from '../actions';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
        
    }



    render(){
        // .find is a JS built in function
        const {user} = this.props;
        if(!user){
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}

// Doing the logic for finding a certain user can enhance reusability
// mapStateToProps gets 2 params passed into it state,ownProps
//          state = redux state store, ownProps a reference of the props passed into component
//                      defined in the connect func
function mapStateToProps(state, ownProps){
    return { user: state.users.find(user => user.id === ownProps.userId)}
}
export default connect(mapStateToProps, {fetchUser})(UserHeader);

/*
This is considered not a good approach. This component is recieving way more
data than it needs

also not very reusable for React Components as it is tightly coupled to the Redux store

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
        
    }

    

    render(){
        // .find is a JS built in function
        const user = this.props.users.find((user) => user.id === this.props.userId);
        if(!user){
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}

// Map ALL values = BAD we only care about 1 certain ID!
function mapStateToProps(state){
    return { users: state.users}
}
export default connect(mapStateToProps, {fetchUser})(UserHeader);
*/