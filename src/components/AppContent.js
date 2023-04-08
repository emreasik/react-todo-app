import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList);
    const sortedTodoList = [...todoList]
    sortedTodoList.sort((a, b) => {
        return new Date(b.time) - new Date(a.time);
    });

    return (
        <div>
            {sortedTodoList.length > 0 ?
                sortedTodoList.map((todo) => (<TodoItem key={todo.id} todo={todo} />))
                : <h2>No task found</h2>
            }
        </div>
    )
}

export default AppContent