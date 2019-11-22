export default (state = [], action) => {
    // a reducer can worry about many action.types if you want it too
    // this is common syntax for reducers
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
// rules of reducers
/**
 * Never return undefined
 * 
 * Produces 'state', or data to be used inside the app using 
 *      only previous state and the action.
 * 
 * Must not return each 'out of itself' to decided what value to
 *      retun (redicers are pure)
 *      //bad
 *      no: document.querySelector('someId')
 *      no: api.request(/endpoint)
 *      //good
 *      good: state+action
 * 
 * must not mutate its input 'state' argument
 *      What does 'mutate mean' in Javascript context:
 *          Changing array contents is a mutation
 *          Changing values in a JSON object is mutation
 *          Never do anthing with state =
 * 
 *          non array/JSON objects are immutable
 * 
 *      Not exactly true
 *          if you pass the state arg back to return the app wont change
 *          if you return something thats not state the whole app rerenders
 *          
 */

 //         How to work with JSON and Arrays in Reducers
 /**
  * What do             Bad                     Good
  * Remove Element      state.pop()         ->  state.filter(element => element !== 'hi')
  * Adding Element      state.push('hi')    ->  [...state,'hi']
  * Replacing in Array  state[0]            ->  state.map(el => el === 'hi' ? 'bye' :el)
  * Updating property   state.name = 'Adam' ->  {...state, name:'Adam'}
  * Adding property     state.age = 30      ->  {...state, age:30}
  * removing property   delete state.name   ->  {...state, age:undefined}
  *                                             _.omit(state,'age') // <-- this is lo dash library
  * 
  * 
  * 
  * 
  */