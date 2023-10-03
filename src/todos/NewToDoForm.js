import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";
import './NewTodoForm.css';


const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <button 
                className="new-todo-button"
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                         onCreatePressed(inputValue);
                        setInputValue('');
                    }
                   
                }}>Create Todo</button>
        </div>
    );
    }
//take the state obj and return a piece of obj
const mapStateToProps = state => ({
    todos: state.todos,
});

//function that allows components to trigger 
//actions that redux store will respond to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);