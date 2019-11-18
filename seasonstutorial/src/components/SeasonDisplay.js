import './SeasonDisplay.css';
import React from 'react';


const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'sumer': 'winter';
    }else{
        return lat > 0 ? 'winter': 'summer';
    }
}

const seasonConfig = {
    summer : {
        text : 'Lets die from heat',
        icon : 'sun'
    },
    winter : {
        text : 'Lets die from cold',
        icon : 'snowflake'
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    console.log(season);
    const {text, icon} = seasonConfig[season]; // {text ,icon}
    return (
        // on outter wrapper for div try to name root class to the component name
        <div className={`season-display ${season}`}>
            <i className={`${icon} icon massive icon-left`} />
            <h1 >{text} </h1>
            <i className={`${icon} icon massive icon-right`} />
        </div>
        )
};

export default SeasonDisplay;