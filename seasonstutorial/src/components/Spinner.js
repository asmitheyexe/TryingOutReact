import React from 'react';
/**
 * Used as a Loading Dialog page. Simple Loading wheel with semantic ui bootstrap css
 */
const spinner = () => {
    return (
        <div class="ui active dimmer">
                <div class="ui text loader">Loading...</div>
        </div>
    )
};

export default spinner;