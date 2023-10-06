import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTodos } from './selectors'
import { addTodoRequest } from "./thunks";

const NewTodoFormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewTodoInputContainer = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    height: 70%;
    outline: none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <NewTodoFormContainer>
            <NewTodoInputContainer 
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>Create Todo
            </NewTodoButton>
        </NewTodoFormContainer>
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