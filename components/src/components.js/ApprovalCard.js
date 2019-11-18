import React from 'react';
// Wrapper component that displays 2 buttons below and input component
const ApprovalCard = props =>{
    // Demos how to take a prop object and display it in another component
    return (
        <div className ="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
        </div>
    )
}

export default ApprovalCard;