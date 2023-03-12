// * Global State vs Local State
// * Global State: state that is shared across multiple components
// * Local State: state that is only used in a single component

// ############################################################################################################

/*
* Redux Toolkit: 

    Redux Core:
    1. Reducer
    2. Store
    3. Provider
    4. Subscribe
    5. Dispatch


* Notes:
# Only reducers can create / update the state
# Store is the place that contains the states
# Dispatch function send a trigger to force the reducer update the state
# Subscribe with the store to listen for state changes
# Without subscribe, the store will not update the state and components will not re-render
# Provider is a component that wraps the app and provides the store to the app


* Store: a place to store the state
--- app component subscribes to the store to listen for state changes
--- conatins the state and the reducer


*/

/* ############################################################################################################
* Store => State => App Component => Action => Dispatch => Reducer => State => App Component

* Reducer
- Reducer: a function that takes the current state and an action and returns a new state
--- Reducers are pure functions: they don't modify the state, they return a new state
--- initialState: the initial state of the store
--- update state immutably: use spread operator to copy the state and then update the copy
--- logic to handle state changes
--- send state to the store: store.dispatch(updateState())
--- action: an object that describes what happened
--- dispatch: a function that sends an action to the reducer
--- state is object
--- don't mutate
--- can have many reducers

* Store & Dispatching Steps
--- store take incoming dispatch, fetch throw all reducers, and assign action as a param for each reducer
--- the reducer will be executed one by one, the reducer will receive the action as a param,
 and by using if condition "action.type", the reducer will update the state, and return the new state
 

* First time to load app








*/
