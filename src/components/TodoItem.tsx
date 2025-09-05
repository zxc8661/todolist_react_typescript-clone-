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


export default function TodoItem({done, text, onToggle, onRemove,id}: TodoItemProps){
    const dispatch = useTodoDispatch();
    return(
        <div className="todo-itemblock">
            <div className="checkCircle" onClick={()=>{dispatch({type:'TOGGLE',id:id})}}>
                {done && <i className="checkIcon">✓</i>}
            </div>
            <div className="text">
                {text}
            </div>
            <div className="remove" onClick={()=>{dispatch({type:'REMOVE',id:id})}}>
                <MdDelete/>
            </div>
        </div>
    )
}