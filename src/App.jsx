import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
    removeTodo,
    updateTodo,
    toggleComplete
} from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector((state) => state.todos.todos)

    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)

    const [editText, setEditText] = useState('')

    const handleEdit = (todo) => {

        setEditId(todo.id)

        setEditText(todo.text)
    }

    const handleUpdate = (id) => {

        if (!editText.trim()) return

        dispatch(
            updateTodo({
                id,
                text: editText
            })
        )

        setEditId(null)

        setEditText('')
    }

    return (

        <div className='space-y-4'>

            {
                todos.map((todo) => (

                    <div
                        key={todo.id}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all
                            
                            ${todo.completed
                                ? 'bg-cyan-400 text-black'
                                : 'bg-pink-500 text-white'
                            }
                        `}
                    >

                        <div className='flex items-center gap-3 flex-1'>

                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() =>
                                    dispatch(toggleComplete(todo.id))
                                }
                                className='w-5 h-5'
                            />

                            {
                                editId === todo.id ? (

                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) =>
                                            setEditText(e.target.value)
                                        }
                                        className='px-3 py-2 rounded-lg text-black outline-none flex-1'
                                    />

                                ) : (

                                    <p
                                        className={`text-lg font-medium

                                            ${todo.completed
                                                ? 'line-through'
                                                : ''
                                            }
                                        `}
                                    >
                                        {todo.text}
                                    </p>
                                )
                            }

                        </div>

                        <div className='flex gap-3 ml-4'>

                            {
                                editId === todo.id ? (

                                    <button
                                        onClick={() => handleUpdate(todo.id)}
                                        className='bg-green-500 px-4 py-2 rounded-lg'
                                    >
                                        Save
                                    </button>

                                ) : (

                                    <button
                                        onClick={() => handleEdit(todo)}
                                        className='bg-yellow-400 text-black px-4 py-2 rounded-lg'
                                    >
                                        Edit
                                    </button>
                                )
                            }

                            <button
                                onClick={() =>
                                    dispatch(removeTodo(todo.id))
                                }
                                className='bg-red-500 px-4 py-2 rounded-lg'
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Todos