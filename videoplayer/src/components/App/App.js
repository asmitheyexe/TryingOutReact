import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtubeapi from '../api/youtubeapi';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

// Main component
class App extends React.Component{
    state = { videos:[], selectedVideo: null }

    //create async await callback to be passed down to child components
    onSelectOfVideo = video =>{
        this.setState({selectedVideo : video});
    };
        
    

    // create Async await to update this component
    // Search arrow function passed into props for SearchBar
    onSearchInput = async searchInput => {
        // Response we want is data.items
        // Dont forget 'await' as this is like a callback assignment. when done set values into variable to the left
        const responseFromYoutube = await youtubeapi.get('/search', {
            params:{
                q: searchInput
            }
        });

        this.setState({
            videos: responseFromYoutube.data.items,
            selectedVideo : responseFromYoutube.data.items[0]
        });
    }

    // Called when component first renders
    componentDidMount(){
        this.onSearchInput('Buildings');        
    };

    render(){
        return(
            <div className="ui container" >
                <SearchBar onFormSubmit={this.onSearchInput} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column" >
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column" >
                            <VideoList onSelectOfVideo={this.onSelectOfVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>

            </div>
        ) 
    }
}

export default App;