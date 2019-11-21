import axios from '../api/axios'

// ES 2015 SYNTAX 
export const fetchPosts = () => 
    // redux Thunk lets us use async await syntax with redux
    async dispatch => {
        
        const response = await axios.get('/posts');
        
        dispatch({type:'FETCH_POSTS', payload:response});
    };

