import React from 'react';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [{ text: "Hello" }]}) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

export default TodoList;