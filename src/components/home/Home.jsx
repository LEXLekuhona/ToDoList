import { useState } from 'react'
import data from '../../utils/data'
import CreateTodo from '../create-todo/CreateTodo'
import TodoItem from '../item/TodoItem'

const Home = () => {
	const [todos, setTodos] = useState(data)
	const [edit, setEdit] = useState(null)
	const [valueTitle, setValueTitle] = useState('')
	const [valueDescription, setValueDescription] = useState('')

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const editTodo = (id, title, description) => {
		setEdit(id)
		setValueTitle(title)
		setValueDescription(description)
	}

	const deleteTodo = id => {
		const copy = todos.filter(t => t.id !== id)
		setTodos(copy)
	}

	const saveTodo = id => {
		const newTodo = [...todos].map(item => {
			if (item.id == id) {
				item.title = valueTitle
				item.description = valueDescription
			}
			return item
		})
		setTodos(newTodo)
		setEdit(null)
	}


	return (
		<div className='text-white w-2/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-4'>todos</h1>

			<CreateTodo setTodos={setTodos} />

			{todos.length !== 0
				? todos.map(todo => (
						<TodoItem
							key={todo.id}
							saveTodo={saveTodo}
							todo={todo}
							changeTodo={changeTodo}
							editTodo={editTodo}
							edit={edit}
							valueTitle={valueTitle}
							setValueTitle={setValueTitle}
							valueDescription={valueDescription}
							setValueDescription={setValueDescription}
							deleteTodo={deleteTodo}
						/>
				  ))
				: 'Add todo'}
		</div>
	)
}
export default Home
