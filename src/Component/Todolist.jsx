import React from 'react';

// componenents
import  TodoListItem  from "./TodoListItem";
import  NewTodoForm  from "./NewTodoForm";

// Redux
import { connect } from "react-redux";

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

export default connect(mapStateToProps,  null )(TodoList);