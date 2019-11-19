import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import youtubeapi from '../api/youtubeapi'

class App extends React.Component{

    onSearchInput = (searchInput) => {
        youtubeapi.get('/search', {
            q: searchInput
        })
    }

    render(){
        return(
            <div className="ui container" >
                <SearchBar onFormSubmit={this.onSearchInput} />
            </div>
        ) 
    }
    
}

export default App;