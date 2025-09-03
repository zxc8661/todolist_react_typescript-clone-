import React from "react";
import "./styled-components.css";
import { MdDelete } from "react-icons/md";

type TodoItemProps = {
    done: boolean;
    text: string;
    onToggle?: () => void;
    onRemove?: () => void;
}


export default function TodoItem({done, text, onToggle, onRemove}: TodoItemProps){
    return(
        <div className="todo-itemblock">
            <div className="checkCircle">
                {done && <i className="checkIcon">✓</i>}
            </div>
            <div className="text">
                {text}
            </div>
            <div className="remove">
                <MdDelete/>
            </div>
        </div>
    )
}