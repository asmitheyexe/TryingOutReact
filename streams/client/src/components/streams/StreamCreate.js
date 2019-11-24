import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../actions'
// Field is a component which is why the F is capatalized
class StreamCreate extends React.Component{
    renderInput = ({input, label, meta}) =>{
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
           
        );
    };

    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    onSubmit = (formProps) =>{
        this.props.createStream(formProps);
    };
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Title" />
                
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label= "Enter Description" />
                <button className="ui button primary" >Submit</button>
            </form>
        );
    }
}

const validate = (formValues) =>{
    const errors = {};

    if(!formValues.title){
        // only runs when there is no entered input in title field
        errors.title ='You must enter a title';
    }
    if(!formValues.description){
        // only runs when there is no entered input in title field
        errors.description ='You must enter a description';
    }
    return errors;
};

// same syntax as connect()()
const formWrapper = reduxForm({
    form:'streamCreate',
    validate
})(StreamCreate);

export default connect(null,{
    createStream
})(formWrapper);