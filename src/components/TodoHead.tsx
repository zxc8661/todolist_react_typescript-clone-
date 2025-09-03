import React from "react";
import "./styled-components.css";



export default function TodoHead(){
    return(
        <div className="todo-headblock">
            <h1>2025년 9월 3일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할일 2개 남음</div>
        </div>
    )
}