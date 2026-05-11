import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if (!input.trim()) return

        dispatch(addTodo(input))

        setInput('')
    }

    return (

        <form
            onSubmit={addTodoHandler}
            className='flex gap-4 mb-8'
        >

            <input
                type="text"
                placeholder='Write a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='flex-1 px-4 py-3 rounded-xl outline-none bg-white text-black'
            />

            <button
                type='submit'
                className='bg-yellow-600 hover:bg-[#2e311a] transition-all px-6 py-3 rounded-xl font-semibold'
            >
                Add
            </button>

        </form>
    )
}

export default AddTodo