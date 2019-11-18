import './SeasonDisplay.css';
import React from 'react';

// Calculate what season it is (summer or winter based on latitude)
const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'sumer': 'winter';
    }else{
        return lat > 0 ? 'winter': 'summer';
    }
}
// Nice JSON variable to determine properties fast
const seasonConfig = {
    summer : {
        text : 'Let\'s die from the heat',
        icon : 'sun'
    },
    winter : {
        text : 'Let\'s die from the cold',
        icon : 'snowflake'
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    
    const {text, icon} = seasonConfig[season]; // {text ,icon} cool es6 feature i think
    return (
        // on outter wrapper for div try to name root class to the component name
        <div className={`season-display ${season}`}>
            <i className={`${icon} icon massive icon-left`} />
            <h1 >{text} </h1>
            <i className={`${icon} icon massive icon-right`} />
        </div>
        )
};
// To be able to use React Components we must export them at the end of the file and import them in the file we want to use them in
export default SeasonDisplay;