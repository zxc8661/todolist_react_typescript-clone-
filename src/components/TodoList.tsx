import React from "react";
import TodoItem from "./TodoItem";

import "./styled-components.css";






export default function TodoList(){
    return(
        <div className="todo-list">
            <TodoItem done={true} text="프론트 공부하기" onToggle={()=>{}} onRemove={()=>{}}/>
            <TodoItem done={false} text="책 읽기" onToggle={()=>{}} onRemove={()=>{}}/>
            <TodoItem done={false} text ="영어 공부학" onToggle={()=>{}} onRemove={()=>{}}/> 
        </div>
    )
}