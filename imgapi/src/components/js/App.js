import React from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
/**
 * App will call unsplashed.com API for finding stock images. 
 * 
 * This app demos how to use callbacks from internal components and chain the callbacks together
 */
class App extends React.Component{
    state = { images: [] };
    // Example of a Async function that will fill a variable when the API call is finished
    // Making it a funcitonal arrow function will bind data
    onSearchSubmit = async term => { // create async function to use async await
        const response = await unsplash.get(/*Path to after root url endpoint*/ '/search/photos',/*properties to set*/ {
            // How to use AXIOs to make GET request
            // Add parameters to match what the API expects
            // documentation from unsplash API https://unsplash.com/documentation
            params:{ 
                query: term
            }
        });
        /*.then( response => {
            // Callback attached to promise from API call. This executes when the API returns some information
            // Alternate to using async await
            console.log(response.data.results);
        });*/

        // set our state
        this.setState({
            images : response.data.results
        });
    };

    render(){
        return (
            <div className="ui container" 
            style={{
                margineTop: '10px'
            }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;
/**
 * Library used for API requests, there are 2 popular options
 *      Axios - Library built on Fetch, makes life easier
 *      Fetch - build in browser but has less features, Have to create alot of your own stuff using Fetch
 * 
 * 
 */