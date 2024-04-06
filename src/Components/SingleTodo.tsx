import React from 'react'
import { Todo } from '../model';
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import "./styles.css";
import TodoList from './TodoList';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => 
        todo.id===id?{...todo,isDone:!todo.isDone}:todo
        ));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) =>
            todo.id !== id
        ));
    }

    return (
        <form className='todos__single'>
            {
                todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ): (
                    <span className = "todos__single--text">{ todo.todo }</span>
                )
            }
            
            <div>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <FaCheck />
                </span>
                <span className="icon">
                    <MdEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <RiDeleteBack2Fill />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
