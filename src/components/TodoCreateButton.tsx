import React from "react";
import "./styled-components.css";
import  {useState}  from "react";
import { FaPlus } from "react-icons/fa6";


export default function TodoCreateButton(){

    const [open,setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }


    return (
        <>
        {open &&(
            <div className="insertFormPositioner">
                <div className="insertForm">
                    <input placeholder="할일 입력후 enter를 누르세요"/>
                </div>
            </div>
        )}
        <button className="todo-createButton" onClick={onClick}>
            <FaPlus size={60} color="white"/>
        </button>
        </>
    )
}