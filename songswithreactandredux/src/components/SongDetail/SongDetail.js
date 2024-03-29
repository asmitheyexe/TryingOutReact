import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div>Please Select a song :)</div>
    }
    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Title: {song.title}
                <br />
                duration: {song.duration}
            </p>
        </div>
    )
};

// mapping function
const mapStateToProps = state => {
    return { song: state.selectedSong}
};
export default connect(mapStateToProps)(SongDetail);