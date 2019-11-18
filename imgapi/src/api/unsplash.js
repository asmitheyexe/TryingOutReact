import axios from 'axios';
// documentation from unsplash API https://unsplash.com/documentation
// Creates a Axios client instance and export
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers:{
        // Access key
        Authorization: 'Client-ID (access token here)'
    }

});