// action creator in redux cycle
// named export example
export const selectSong = song => {
    // Return an acton
    return{
        type: 'SONG_SELECTED',
        payload: song
    }
}

