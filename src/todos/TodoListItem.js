import React from "react";
import styled from "styled-components";

const TodoListItemContainer = styled.div`
    background: white;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
    color: black;
    text-align: left;
`;
const TodoItemContainerWithWarning = styled(TodoListItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5))
        ? 'none'
        : '5px solid red' 
    };
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`;

const RemovedButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => {
    const Container = todo.isCompleted ? TodoListItemContainer : TodoItemContainerWithWarning;
    return (
    <Container createdAt={todo.createdAt}>
        <h3>{todo.text}</h3>
        <p>
            Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p>
        <ButtonContainer>
            {todo.isCompleted 
                ? null 
                : <CompletedButton 
                    onClick={() => onCompletedPressed(todo.id)}
                    >Mark As Completed</CompletedButton>
            }
            <RemovedButton 
                onClick={() => onRemovePressed(todo.id)}
                >Remove</RemovedButton>
        </ButtonContainer>
    </Container>
    )
};

export default TodoListItem;

