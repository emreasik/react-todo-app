import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
    const todoList = localStorage.getItem('todoList');
    if (todoList) {
        return JSON.parse(todoList);
    }
    localStorage.setItem('todoList', JSON.stringify([]));
    return [];
};

const initialValue = {
    todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            localStorage.setItem('todoList', JSON.stringify(state.todoList));
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;