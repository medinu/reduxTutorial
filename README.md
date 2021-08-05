# :grinning:  Learning Redux :grinning: 

## What is redux?? :thinking:
Redux is a state management tool that can be used to create and manage a global state. The global state then can be accessed through out the component heirarchy without having to flow the necessary data down. The Redux store also allows for the creation of predefined actions that can be called using functions called dispatchers which calls the reducer function to modify the global state. 

Through the use of redux we can reduce the need to propogate variables through multiple layers of component. This greatly reduces naming error thus reducing development time. Also, since state manipulating actions are predefined the chances of illegaly mutating the state is greatly reduced and possible bugs are reduced.  

## Dependencies :toolbox: 
* redux { createStore, combineReducers }
* react-redux { provider, connect }


## How to create a store? :books: 

* First, decide what data needs to be housed in the store and create actions for the data. An action is an object that has a type and any possible associated payload. The type is a string that is checked by a reducer function and appropriate action is taken. An example of Action: 

    ``` Javascript
    export const CREATE_TODO = 'CREATE_TODO';   // Action type, has to be a string
    export const createTodo = text => ({        // Action creator, a function that returns an action object. {type, payload}
        type: CREATE_TODO,
        payload: { text },
    });

    ```

* 