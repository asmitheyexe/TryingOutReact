import React from 'react';
/**
 * Used as a Loading Dialog page. Simple Loading wheel with semantic ui bootstrap css
 */
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
        </div>
    )
};

// way to set default props for components
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;