
import "./styled-components.css";
import  {useState}  from "react";
import { MdAdd, MdClose } from "react-icons/md";
import {useTodoDispatch} from "../TodoContext";

export default function TodoCreateButton(){
    const dispatch = useTodoDispatch();
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const onClick = () => {
        setOpen(!open);
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = text.trim();
        if(!value){
            return;
        }
        dispatch({type:'CREATE',text:value})
        setText("");

    }


    return (
        <>
        {open &&(
            <div className="insertFormPositioner">
                <form className="insertForm" onSubmit={onSubmit}>
                    <input className="insertFormInput" placeholder="할일 입력후 enter를 누르세요" value = {text} onChange={onChange} />
                </form>
            </div>
        )}
        <button className={`todo-createButton ${open ? "open" : ""}`} onClick={onClick}>
          
                {open  ? <MdClose style={{padding:0, margin:0,fontSize :"50px"}}/> : <MdAdd style={{padding:0, margin:0,fontSize :"50px"}}/>}
        
        </button>
        </>
    )
}