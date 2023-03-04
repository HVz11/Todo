//all methods to interact with todos 
import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer"

const defaultTodos = [
    { id: 1, task: "Meow Meow", completed: false },
    { id: 2, task: "eh", completed: true }
]

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    );
}