import React from "react";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodo } from "../TodoContext";
import "./styled-components.css";






export default function TodoList(){
    const dispatch = useTodoDispatch();
    const todoData = useTodo();

    return(
        <div className="todo-list">
            {todoData.map(todo =>(
                <TodoItem done ={todo.done} text ={todo.text} id={todo.id}
                onToggle={()=>{}} 
                onRemove={()=>{}}
                />
            ))}
        </div>
    )
}