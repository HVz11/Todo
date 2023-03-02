import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(updatedTodos);
        }
    };
};
