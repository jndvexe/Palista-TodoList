import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from './selectors'
import { addTodoRequest } from "./thunks";
import './NewToDoForm.css';

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");
    return (
            <div className="NewTodoContainer">
                <input className="NewTodoInputContainer" 
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <button className="NewTodoButton"
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>Create Todo
                </button>   
            </div>
    );
    }
//take the state obj and return a piece of obj
const mapStateToProps = state => ({
    todos: getTodos(state),
});

//function that allows components to trigger 
//actions that redux store will respond to
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);