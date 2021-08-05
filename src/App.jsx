import React from 'react';

import TodoList from "./Component/Todolist";
const App = ()=>{
    return ( <div className="App">
        <h1>Hello world!</h1>
        <p>Redux is awesome.</p>

        <TodoList/>
    </div>);
}

export default App;