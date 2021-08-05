import React from 'react';

import { removeTodo, completeTodo } from '../store/actions';
import { connect } from "react-redux";

const TodoListItem = (({todo, onCompletePressed, onRemovePressed}) =>{
    const todoStyle = {
        backgroundColor: "hsla(0, 100%, 50%, 0.3)",
        border: "2px solid black",
    };

    return (
        <div 
            key={todo.text} 
            style = { (todo.isCompleted)? 
                {...todoStyle, backgroundColor: "hsla(120, 100%, 50%, 0.3)"} : 
                todoStyle}
        >

            <h3>{todo.text}</h3>
            <div >
                <button className="completed-btn" onClick={()=>{onCompletePressed(todo.text)}}>Completed</button>
                <button className="remove-btn" onClick={()=>{onRemovePressed(todo.text)}}>Remove</button>
            </div>
        </div>
    )
})


const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onCompletePressed: (text) => dispatch(completeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);