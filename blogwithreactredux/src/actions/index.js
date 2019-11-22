import axios from '../api/axios'
import _ from 'lodash'; // convention to use _ as variable
// ES 2015 SYNTAX 
export const fetchPosts = () => 
    // redux Thunk lets us use async await syntax with redux
    async dispatch => {
        
        const response = await axios.get('/posts');
        
        dispatch({type:'FETCH_POSTS', payload:response.data});
    };

// export const fetchUser = (id) => async dispatch => {
//         const responseData = await axios.get(`/users/${id}`);
        
//         dispatch({type:'FETCH_USER', payload:responseData.data})
//     };

// this will memoize the each function but the async keyword creates a NEW function each call
// so this doesnt help

export const fetchUser = function(id) {
    return _.memoize(async function (dispatch) {
        const responseData = await axios.get(`/users/${id}`);
        dispatch({type:'FETCH_USER', payload:responseData.data});
    });
}


/**
 * 
 * 
 * // this is bad BECAUSE it makes a TON of http requests in network
 * export const fetchUser = (id) => async dispatch => {
 *       const responseData = await axios.get(`/users/${id}`);
 *      
 *      dispatch({type:'FETCH_USER', payload:responseData.data})
 *  };
 * 
 * 
 * 
 * 
 * 
 */

 // using Lo dash library
 // memoizeing 
 // consider the following
 /**
  * function getUser(id){
  *     fetch(id); //built in function to make network requests
  *     return 'Request made';     
  * }
  * 
  * const memoizedGetUser = _.memoize(getUser); // Wraps the function
  * // this allows the user to make 1 call only per uniqe ID. This will help reduce duplicate calls for the same data
  * // kinda like a cache but not a cache
  * 
  */