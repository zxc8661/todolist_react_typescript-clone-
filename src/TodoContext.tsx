 import React,{createContext, useReducer, useContext} from 'react';


interface TodoData{
    id: number;
    text: string;
    done: boolean;
    createdDate: Date;
}
type TodoAction =
{type: 'CREATE', text: string} 
|{type :'TOGGLE',id:number} 
| { type:'REMOVE',id:number}

const TodoStateContext = createContext<TodoData[] | undefined>(undefined)
const TodoDispatchContext = createContext<React.Dispatch<TodoAction> | undefined>(undefined)



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




 function todoReducer(state: TodoData[],action:TodoAction):TodoData[]{

    switch(action.type){
        case 'CREATE':
            return [
                ...state,
                {   
                    id:TodoIdCounter++,
                    text: action.text ===   undefined ? "" :action.text,
                    done: false,
                    createdDate: new Date()
                }
            ]
        case 'TOGGLE':
            
            return state.map(todo=>todo.id===action.id?{...todo,done: !todo.done}:todo)
            
        case 'REMOVE':
            //initialTodoData.filter(todo=>todo.id!==id); -> 새배열을 반환함으로 원본배열이 수정되지 않음 
            let index = state.findIndex(todo=>todo.id===action.id);
            return [...state.slice(0,index),...state.slice(index+1)]
            
        default:
            throw new Error("잘못된 요청");
        }
 }

 export function TodoContext({children}:{children: React.ReactNode}){
    const [todoData,setTodoData] = useReducer(todoReducer,initialTodoData)

    return(
        <TodoStateContext.Provider value={todoData}>
            <TodoDispatchContext.Provider value={setTodoData}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
 }

 export function useTodo(){
    const state = useContext(TodoStateContext);
    if(!state){
        throw new Error("Cannot find TodoStateContext");
    }
    return state;
 }


 export function useTodoDispatch(){
    const dispatch = useContext(TodoDispatchContext);
    if(!dispatch){
        throw new Error("Cannot find TodoDispatchContext");
    }
    return dispatch;
 
 }