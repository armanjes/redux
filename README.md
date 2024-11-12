Redux is a "state management library" for JavaScript apps commonly used in React app. But we can use with other framework as well as plain JavaScript. Redux stores application state in a single, central. This way components across the app can access and modify state without passing props down multiple levels.

🚀 Keywords related to redux:- state, dispatch action, reducer, store

State: This is the data we want to remember and manage. We store this state centrally through "store" making it access able across the app.

Store: Store is an object that holds the entire state. The store is created through createStore() provided by redux and can be accessed, updated as needed.

Action: Action is an object that has two properties "type" & "payload".type property describing what kind of change you want to make to the state. Payload carries additional data.

Dispatch: This is a function provided by the store. It sends actions to redux. Calling dispatch(action) will send an action to the store, triggering a change in the state based on the action.

Reducer: Reducers are pure functions that specify how the state should change in response to an action. They take two arguments: the current state and an action, and they return the new state.