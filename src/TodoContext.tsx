import React,{createContext, useReducer} from 'react';


interface TodoData{
    id: number;
    text: string;
    done: boolean;
    createdDate: Date;
}


const initialTodoData: Array<TodoData> = [
    {
        id: 1,
        text: '프론트 공부하기',
        done: false,
        createdDate: new Date(),
    },
    {
        id: 2,
        text: '책 읽기',
        done: false,
        createdDate: new Date(),
    },
    {
        id: 3,
        text: '영어 공부학',
        done: false,
        createdDate: new Date(),
    },
]

let TodoIdCounter = 4;


 function todoReducer(action:string, text?:string,id?:number):void{

    switch(action){
        case 'CREATE':
            const newTodo: TodoData ={
                id: TodoIdCounter++,
                text: text === undefined ? "" :text,
                done: false,
                createdDate: new Date(),
            }
            initialTodoData.push(newTodo);
            break;
        case 'TOGGLE':
            initialTodoData.forEach(todo=>{
                if(todo.id===id){
                    todo.done = !todo.done;
                 
                }
            })
            break;
        case 'REMOVE':
            //initialTodoData.filter(todo=>todo.id!==id); -> 새배열을 반환함으로 원본배열이 수정되지 않음 
            const index = initialTodoData.findIndex(todo => todo.id === id);
            if (index > -1) {
                initialTodoData.splice(index, 1);
            }
            break;
        default:
            throw new Error("잘못된 요청");
        }
 }

 export function TodoContext({children}:{childre: React.ReactNode}){
    const [todoDate,setTodoData] = useReducer(todoReducer,initialTodoData)
 }