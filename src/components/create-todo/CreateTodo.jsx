import { useState } from 'react'

const CreateTodo = ({ setTodos }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const addTodo = (title, description) => {
		if (title.trim() === '' && description.trtim() === '') return

		setTodos(prev => [
			{
				id: new Date(),
				title,
				description,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
		setDescription('')
	}

	return (
		<div className=' items-center mb-4 rounded-2xl bg-zinc-800 border-2 px-5 py-3 w-full'>
			<input
				className='bg-transparent w-full border-none outline-none'
				type='text'
				onKeyDown={e => e.key === 'Enter' && addTodo(title, description)}
				placeholder='title...'
				onChange={e => setTitle(e.target.value)}
				value={title}
			/>

			<input
				className='bg-transparent w-full border-none outline-none'
				type='text'
				onKeyDown={e => e.key === 'Enter' && addTodo(title,description)}
				placeholder='description...'
				onChange={e => setDescription(e.target.value)}
				value={description}
			/>
		</div>
	)
}
export default CreateTodo
