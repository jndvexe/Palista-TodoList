import React from "react";
import styled from "styled-components";
import TodoList from "./todos/TodoList";

const AppContainer = styled.div`
  text-align: center;
`;
function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
