
import "./styled-components.css";
import  {useState}  from "react";
import { MdAdd, MdClose } from "react-icons/md";


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
        <button className={`todo-createButton ${open ? "open" : ""}`} onClick={onClick}>
            {open ? <MdClose/> : <MdAdd/>}
        </button>
        </>
    )
}