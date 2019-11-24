1. What problem does the context API help solve?

Context API allows you to pass state to all components in an app without using props.
This solves the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

action: An object that connects information from the app and transfers it to the store.

reducers: It receives information from the action and uses it to create new state.

store: It holds all state. It is a 'single source of truth' because all components get their state from the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state makes use of Context API to provide state to every component of an app.
It is useful for data that needs to be used for many different components or for components that are far down a component chain.
Component state is state that is only found in a component.
This state would have to be passed down by props.
It is useful for storing state that is only needed for one component of an app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middle-ware that allows action-creators to return a function.
Normally action-creators only return objects.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like ProductContext the most.
It allows us to provide Application state and pass down functions without the use of Reducers nor Actions.
It is much simpler and clearner code.
