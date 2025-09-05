import React from 'react';
import TodoTemplate from './components/TodoTemplate.tsx';
import TodoHead from './components/TodoHead.tsx'
import TodoList from './components/TodoList.tsx'
import TodoCreateButton from './components/TodoCreateButton.tsx'
import {TodoContext} from './TodoContext.tsx'
import './App.css'

function App() {
  return(
    
    <>
    <body/>
    <TodoContext>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreateButton/>
      </TodoTemplate>
    </TodoContext>
    </>
  ) 
}

export default App
