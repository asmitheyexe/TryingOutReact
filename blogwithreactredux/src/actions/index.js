import axios from '../api/axios'
import _ from 'lodash'; // convention to use _ as variable
// ES 2015 SYNTAX 
export const fetchPosts = () => 
    // redux Thunk lets us use async await syntax with redux
    async dispatch => {
        const response = await axios.get('/posts');
        dispatch({type:'FETCH_POSTS', payload:response.data});
    };

export const fetchUser = (id) => async dispatch => {
        const responseData = await axios.get(`/users/${id}`);
        
        dispatch({type:'FETCH_USER', payload:responseData.data})
    };

// This method for limiting network requests imo is better, it may take more computation but its better imo
export const fetchPostAndUsers = () => async (dispatch, getState) => {
    // if you want to use action creators inside action creators you gotta dispatch the function
    await dispatch(fetchPosts());
    _.chain(getState().posts)// The argument getState().posts is automatically passed down to the next chain for us
        .map('userId') // so now all we do is specify the attribute/property we want
        .uniq() // apply the unique function
        .forEach(id => dispatch(fetchUser(id)))// then dispatch all of our ids to fetchUser action
        .value(); // .value is like execute(). to get all the chains to work you end with a .value()

};


/*
Taking
    const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqUserIds.forEach( id => dispatch(fetchUser(id)));

and turning it into something more compact..

// LoDash Chaining
    _.chain(getState().posts)// The argument getState().posts is automatically passed down to the next chain for us
        .map('userId') // so now all we do is specify the attribute/property we want
        .uniq() // apply the unique function
        .forEach(id => dispatch(fetchUser(id)))// then dispatch all of our ids to fetchUser action
        .value(); // .value is like execute(). to get all the chains to work you end with a .value()

these two examples do the same thing
*/

/*
// this will memoize the each function but the async keyword creates a NEW function each call
// so this doesnt help
// This solution to not fetching the same 'user' multiple times comes with a serious side effect
// If we updated this used via api and wanted to get that same updated user back this wouldn't allow that, returning the first time called user
export const fetchUser = id => dispatch => {
        _fetchUser(id, dispatch);
};

// private function. _ is convention to not mess with this function unless you know what you're doing i guess
const _fetchUser = _.memoize(async (id, dispatch) => {
    const responseData = await axios.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload:responseData.data});
});
*/
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
 // memoizeing - kinda like caching GET request data
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