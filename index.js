/*

// ✨ understanding basics

const { createStore } = require("redux");

// state, action, reducer, store

// state
const initialCounter = { count: 0 };

// action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const incrementAction = () => {
  return { type: INCREMENT };
};

const decrementAction = () => {
  return { type: DECREMENT };
};

const resetAction = () => {
  return { type: RESET };
};

const incrementByValueAction = (value) => {
  return { type: INCREMENT_BY_VALUE, payload: value };
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
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));

// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(incrementByValueAction(100));
// store.dispatch(incrementByValueAction(100));
*/

/*
// ✨ understanding payload

// state
const initialState = {
  user: [],
  count: 0,
  };
  
  // action
  const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
  const DECREMENT_bY_VALUE = "DECREMENT_bY_VALUE";
const ADD_USER = "ADD_USER";

const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
    };
    };
    
    const decrementByValue = (value) => {
      return {
        type: DECREMENT_bY_VALUE,
        payload: value,
        };
        };
        
        const addUser = (user) => {
          return {
            type: ADD_USER,
            payload: user,
            };
            };
            
            // reducer
            const reducer = (state = initialState, action) => {
              switch (action.type) {
                case INCREMENT_BY_VALUE:
                  return {
                    ...state,
                    count: state.count + action.payload,
                    };
                    case DECREMENT_bY_VALUE:
                      return {
        ...state,
        count: state.count + action.payload,
      };
      case ADD_USER:
        return {
          ...state,
          user: [...state.user, action.payload]
          };
          default:
            state;
            }
            };
            const store = createStore(reducer);
            store.subscribe(() => console.log(store.getState()));
            
            store.dispatch(incrementByValue(47));
            store.dispatch(addUser(145));
            store.dispatch(addUser(146));
            store.dispatch(addUser(147));*/

// ✨ thunk

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default; // Try removing .default if it throws an error
const api = "https://jsonplaceholder.typicode.com/todos";

// Initial state
const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

// Action types
const FETCHDATA = "FETCHDATA";
const SUCCESSFULL = "SUCCESSFULL";
const FAILED = "FAILED";

// Action creators
const fetchDataAction = () => {
  return { type: FETCHDATA };
};

const successfullAction = (data) => {
  return { type: SUCCESSFULL, payload: data };
};

const failedAction = (error) => {
  return { type: FAILED, payload: error };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDATA:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESSFULL:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FAILED:
      return {
        ...state,
        isLoading: false, // Set to false since loading has failed
        error: action.payload,
      };
    default:
      return state;
  }
};

// Thunk action creator for fetching data
const data = () => async (dispatch) => {
  dispatch(fetchDataAction());
  try {
    const response = await fetch(api);
    const api_data = await response.json();
    dispatch(successfullAction(api_data));
  } catch (error) {
    dispatch(failedAction(error.message));
  }
};

// Store creation
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

// Dispatching the async action
store.dispatch(data());
