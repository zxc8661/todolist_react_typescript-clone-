import React from "react";
import "./styled-components.css";



export default function TodoTemplate({children}: {children: React.ReactNode}){
    return ( 
        <div className="todo-template">
            {children}
        </div>
    )
}