import React from 'react';
import SongList from '../SongList/SongList'
import SongDetail from '../SongDetail/SongDetail'
// combining redux
const App = () =>{
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
        );
}
export default App;