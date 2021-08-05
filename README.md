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
    // Action type, has to be a string
    export const ACTION_TYPE_NAME = 'ACTION_TYPE_NAME';   

    // Action creator, a function that returns an action object. {type, payload}
    export const actionCreator = dataPayload => ({        
        type: ACTION_TYPE_NAME,
        payload: { dataPayload },
    });

    ```

* Now we create a reducer function. A reducer function is not a special redux related function. It is simply function that takes in a state and action as arguments and has either a switch case or chained if else to return a new state depending on the action type. **It is important to never actually modify the state directly inside the reducer**. 

    ``` javascript
    // This is the previously defined action
    import { ACTION_TYPE_NAME } from './pathToActions'

    // we export the reducer function
    // in this case, we are setting the initial state variable to be an empty list
    export const actionReducer = (state = [], action) => {
        //destructure action type and payload from action
        const {type, payload} = action;

        switch(type){
            case ACTION_TYPE_NAME: {
                //destructure payload
                const {text} = payload;
                // all cases must return a new object 
                // mutating the original state is an illegal operation
                return state.concat(text);
            }

            default: {
                // We return the original state by default
                return state;
            }
        }
    }

* Next we create a store, by using the createStore function from the redux library. The createStore function takes in a conbineReducer function with our defined reducer as an arguement. 

    ``` javascript
    import { createStore, combineReducers  } from "redux";
    
    // previously defined reducer function
    import { actionReducer } from "./pathToReducers";

    const reducers = { actions: actionReducer };

    // combineReducers(): Turns an object whose values are different reducer functions, into a single reducer function.
    const demoReducer = combineReducers(reducers);

    // export a function that creates a store using defined reducers
    export const configureStore = () => createStore(demoReducer);
    ```

* The setup needed to start the redux store is complete. Now to create the store in our react application we go into our main App components js file and wrap the <App.> component with in the ReactDom.render function with a provider component. The provider specifies a store object which is accessable to all the child component through the connect() function. 

    ``` javascript
    // React imports
    import React from 'react';
    import ReactDOM from "react-dom";

    // Component import
    import App from './pathToApp';

    //redux setup
    import { Provider } from "react-redux";

    // store function defined on the last step. 
    import { configureStore } from "./pathToConfigureStore";

    ReactDOM.render(
        <Provider store={configureStore()}> 
            <App/>
        </Provider>,
        document.getElementById('root')
    );
    ```

* After the provider has configured the store for its child component, state props do not need to be explicitly sent to the child component. The child component needs to call connect before the export statement with the appropriate mapStateToProps and mapDispatchToProps as arguements.

    ``` javascript
    // React imports
    import React, { useState } from 'react';

    // The connect import allows the component to access the global store
    import { connect } from "react-redux";

    // the predefined actionCreator creates actions for the reducers consumption
    import {actionCreator} from './pathToActions'

    // The parameters {variableInState , dispatchCreator} are provided by the connect call at the end. The map state and map dispatch objects explicitly tell the connect function which variables and functions the component should work with. 
    const NewComponent = ({variableInState, dispatchCreator}) => {
        const [inputValue, setinputValue] = useState(variableInState + 2);

        return (
            <div>
                // the dispatch is called using an anonymous function with the argument of variableInstate+2
                <button onClick={()=>{
                    onCreatePressed(inputValue);
                }}>Create Todo</button>
            </div>
        );
    }

    // tells the connect functions which state variables should be available to the component
    const mapStateToProps = state => ({
        variableInState: state.variables
    })


    // tells the connect functions which dispatch should be available to the component
    const mapDispatchToProps = dispatch => ({
        dispatchCreator: text => dispatch(actionCreator(text))
    })

    export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);
    ```

    ## What i have so far. :computer: 
    