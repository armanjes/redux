# Redux Overview

Redux is a "state management library" for JavaScript apps, commonly used in React applications. However, it can also be used with other frameworks and plain JavaScript. Redux stores application state in a single, central store. This allows components across the app to access and modify state without passing props down multiple levels.

![Redux Diagram](assets/redux_diagram.png "Overview of Redux State Flow")

🚀 Keywords related to Redux:
- **State**: This is the data we want to remember and manage. We store this state centrally through the "store," making it accessible across the app.
- **Store**: The store is an object that holds the entire state. The store is created through `createStore()` provided by Redux and can be accessed and updated as needed.
- **Action**: An action is an object with two properties: `type` and `payload`. The `type` property describes what kind of change you want to make to the state, and the `payload` carries additional data.
- **Dispatch**: A function provided by the store. It sends actions to Redux. Calling `dispatch(action)` will send an action to the store, triggering a change in the state based on the action.
- **Reducer**: Reducers are pure functions that specify how the state should change in response to an action. They take two arguments: the current state and an action, and they return the new state.
