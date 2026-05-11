import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {

  return (

    <div
      className='min-h-screen bg-[#000] flex justify-center items-start py-10 px-4'
    >

      <div
        className='w-full max-w-2xl bg-[#111a19] p-8 rounded-3xl shadow-2xl border-4 border-yellow-600'
      >

        <h1
          className='text-4xl font-bold text-center text-[#f8d794] mb-8'
        >
          Redux Toolkit Todo App
        </h1>

        <AddTodo />

        <Todos />

      </div>

    </div>
  )
}

export default App