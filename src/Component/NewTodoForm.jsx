import React, { useState } from 'react';

import { connect } from "react-redux";
import {createTodo} from '../store/actions'

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setinputValue] = useState('');

    console.log(todos);

    return (
        <div>
            <input 
                type="text" 
                placeholder='enter Todo here' 
                value={inputValue}
                onChange={(e) => {setinputValue(e.target.value);}}    
            />
            <button onClick={()=>{
                console.log("btn clicked");
                onCreatePressed(inputValue);
                console.log(inputValue);
            }}>Create Todo</button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
