import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { 
    getTodos, 
    getTodosLoading,
    getCompleteTodos,
    getIncompleteTodos,
} from './selectors';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest} from './thunks';
import './TodoList.css'

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className='ListWrapper'>
            
            <NewToDoForm />
            <div>
                <h3 className='FormTitle'>Incomplete:</h3>
                
                {incompleteTodos.map(todo => <TodoListItem 
                    todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed} 
                />)}
            </div>
            <h3>Complete:</h3>
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletedPressed={onCompletedPressed}
            />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);