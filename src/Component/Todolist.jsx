import React from 'react';

// componenents
import  TodoListItem  from "./TodoListItem";
import  NewTodoForm  from "./NewTodoForm";

// Redux
import { connect } from "react-redux";
import { removeTodo, createTodo, completeTodo } from "../store/actions";


// main component
const TodoList = ({todos}) =>{
    return (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map((todo,idx) => <TodoListItem key={idx+todo.text} todo={todo}/>)}
    </div>)
}



// Redux setup
const mapStateToProps = state =>({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onCreatePressed: (text) => dispatch(createTodo(text)),
    onCompletePressed: (text) => dispatch(completeTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);