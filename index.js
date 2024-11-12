/*const { createStore } = require("redux");

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};

// Initial state
const initialState = { count: 0 };

// Reducer
const counterReducer = (state = initialState, action) => {
    // console.log(action);
    
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

// Subscribe to store updates (logs state to console whenever it changes)
store.subscribe(() => {
  console.log("Current state:", store.getState());
});

// Dispatch actions to update state
store.dispatch(increment()); // { count: 1 }
store.dispatch(increment()); // { count: 2 }
store.dispatch(decrement()); // { count: 1 }
store.dispatch(decrement()); // { count: 0 }
store.dispatch(decrement()); // { count: ? }
*/

const { createStore } = require("redux");

// state, action, reducer, store

// state
const initialCounter = { count: 0 };

// action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const incrementAction = () => {
  return { type: INCREMENT };
};

const decrementAction = () => {
  return { type: DECREMENT };
};

const resetAction = () => {
  return { type: RESET };
};

// reducer
const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
