import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../../actions' // named export

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button  
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content" >
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

// process state data to send to components as props
// state should be the redux store in provider
const mapStateToProps = state => {
    return { songs: state.songs};
};

// what is that syntax lol
/**
 * How this works:
 *                  first ()
 * function connect(){
 *                  second ()
 *  return function (){
 *      return 'Hi There.'
 *  }
 * }
 * 
 * first args = mapping function
 * 2nd args = component
 */
export default connect(mapStateToProps ,{ selectSong})(SongList);

