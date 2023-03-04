//all methods to interact with todos 
import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Meow Meow", completed: false },
    { id: 2, task: "eh", completed: true }
]

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}