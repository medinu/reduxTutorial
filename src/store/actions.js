//Action descriptor
export const CREATE_TODO = 'CREATE_TODO';   // Action type
export const createTodo = text => ({        // Action creator
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';   // Action type
export const removeTodo = text =>({         // Action creator
    type: REMOVE_TODO,
    payload: { text },
})

export const COMPLETE_TODO = 'COMPLETE_TODO';   // Action type
export const completeTodo = text => ({          // Action creator
    type: COMPLETE_TODO,    
    payload: { text },
})

