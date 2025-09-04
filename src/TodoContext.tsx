import React,{createContext} from 'react';


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


 function createTodo(action:string, text?:string,id?:number):void{

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
            initialTodoData.filter(todo=>todo.id!==id);
    }
 }