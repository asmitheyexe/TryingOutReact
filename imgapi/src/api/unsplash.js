import axios from 'axios';
// documentation from unsplash API https://unsplash.com/documentation
// Creates a Axios client instance and export
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers:{
        // Access key
        Authorization: 'Client-ID a59102679b0fa6b516d90446baf4a65d33fbe9e4b9d56e1029d81d6cb89526df'
    }

});