import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actions";

export const todos = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload;

            const newTodo = {
                text:text, 
                isCompleted: false,
            };

            return (text.length > 0 ) ? state.concat(newTodo) : state;
        }
        case REMOVE_TODO: {
            const {text} = payload;
        
            return state.filter( todo => todo.text != text);
        }

        case COMPLETE_TODO : {
            const {text} = payload;

            let newState = state.map( (todo)=>{
                if (todo.text === text){
                    todo.isCompleted = true;
                }

                return todo;
            });

            console.log (newState);

            return newState;
        }

        default: {
            return state; 
        }
    }
}