import {combineReducers} from 'redux';

// kinda overkill
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30' },
        {title: 'AllStar', duration: '3:15'},
        {title: 'I want it that way', durations:'1:45'}
    ];
};

// if action is SONG_SELECTED then return the payload
const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }


    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});