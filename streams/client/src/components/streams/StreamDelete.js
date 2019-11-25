import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteStream,fetchStream} from '../actions'
// Stream delet uses a Modal dialog, which means it blocks back ground
// sometimes JSX can add bad styling using something like actions in this example
/*
    const actions = (
        <div>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </div>
    );
*/

//React.Fragment tag will help keep styling as it is suppose to be
// <div></div> can kinda mess up styling in react in certain cases

/**
        <React.Fragment >
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>

        is equal too, exact same functionallity but Linters and Styling extentions will struggle with <></> instead of <React.Fragment></React.Fragment> thinking its invalid

        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>



 */
class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (id) =>{
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions(){
        const id = this.props.match.params.id;
        return(
            <React.Fragment >
                <Link onClick={() => this.onSubmit(id)} className="ui button negative">Delete</Link>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream: ${this.props.stream.title}`;
    }
   render(){
       
        return(
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions ={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
        );
   }
};


const mapStateToProps = (state, ownProps) =>{
    return {stream:state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);