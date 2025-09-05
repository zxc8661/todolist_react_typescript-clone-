import React from "react";
import "./styled-components.css";
import { MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

type TodoItemProps = {
    done: boolean;
    text: string;
    onToggle?: () => void;
    onRemove?: () => void;
    id: number;
}


export default function TodoItem({done, text, onToggle, onRemove}: TodoItemProps){
    return(
        <div className="todo-itemblock">
            <div className={`checkCircle ${done ? "done" : ""}`} onClick={onToggle}>
                {done && <i className="checkIcon">✓</i>}
            </div>
            <div className={`text ${done ? "done" : ""}`}>
                {text}
            </div>
            <div className="remove" onClick={onRemove}>
                <MdDelete/>
            </div>
        </div>
    )
}