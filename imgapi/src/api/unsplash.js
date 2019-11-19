import axios from 'axios';
// documentation from unsplash API https://unsplash.com/documentation
// Creates a Axios client instance and export
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers:{
        // Access key
        Authorization: 'Client-ID 060e99b557216eb2fe09acc886cc413da7ecfa8f272114f8c32120ebbbc21fbb'
    }

});