import React from "react";
import "./styled-components.css";
import {useTodo} from "../TodoContext";


export default function TodoHead(){
    const todoData = useTodo();
    const today = new Date();

    const date= today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const day = today.toLocaleDateString('ko-KR',{
        weekday: 'long',
    })

    return(
        <div className="todo-headblock">
            <h1>{date}</h1>
            <div className="day">{day}</div>
            <div className="tasks-left">할일 {todoData.filter(todo => todo.done===false).length}개 남음</div>
        </div>
    )
}