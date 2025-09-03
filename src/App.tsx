import React from 'react';
import TodoTemplate from './components/TodoTemplate.tsx';
import TodoHead from './components/TodoHead.tsx'
import TodoList from './components/TodoList.tsx'
import './App.css'

function App() {
  return(
    <>
    <body/>
    <TodoTemplate>
      <TodoHead/>
      <TodoList/>
    </TodoTemplate>
    </>
  ) 
}

export default App
