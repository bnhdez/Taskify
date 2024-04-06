import React from 'react'
import { Todo } from '../model';
import { MdEdit } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
    return (
        <form className='todos__single'>
            <span className="todos__single--text">
                {todo.todo}
            </span>
            <div>
                <span className="icon">
                    <FaCheck />
                </span>
                <span className="icon">
                    <MdEdit />
                </span>
                <span className="icon">
                    <RiDeleteBack2Fill />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
