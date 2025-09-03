import React from "react";
import "./styled-components.css";
import  {useState}  from "react";
import {MdAdd} from "react-icons/md";


export default function TodoCreateButton(){

    const [open,setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }


    return (
        <>
        {open &&(
            <div className="insertFormPositioner">
                
            </div>
        )}
        </>
    )
}