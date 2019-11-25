import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Example of using React Portals
 * 
 * event.stopPropagation() will stop events being wired to all child components from a parent like in our onClick handler
 */
const Modal = props =>{
    return ReactDOM.createPortal(
        // first Arg is JSX
        (
            <div onClick={props.onDismiss} className="ui dimmer modals visable active">
                <div onClick={(event) => event.stopPropagation()} className="ui standard modal visable active">
                   <div className="header">
                       {props.title}
                    </div>
                    <div className="content">{props.content}</div>
                    <div className="actions">
                        {props.actions}
                    </div>
                </div>
            </div>
        ),
        //second Arg is where the modal should be rendered
        document.querySelector('#modal')
    );
};

export default Modal;