import Check from '../check/Check'
import Delete from '../delete/Delete'
import Edit from '../edit/Edit'
import Save from '../save/Save'

const TodoItem = ({
	saveTodo,
	todo,
	changeTodo,
	editTodo,
	deleteTodo,
	edit,
	valueTitle,
	setValueTitle,
	valueDescription,
	setValueDescription
}) => {
	return (
		<div className='flex'>
			{edit == todo.id ? (
				<>
					<input
						className='items-center mb-4 bg-gray-800 p-5 w-full border-none outline-none'
						value={valueTitle}
						onChange={e => setValueTitle(e.target.value)}
					/>
					<input
						className='items-center mb-4 bg-gray-800 p-5 w-full border-none outline-none'
						value={valueDescription}
						onChange={e => setValueDescription(e.target.value)}
					/>
				</>
			) : (
				<button
					className='flex items-center mb-4 bg-gray-800 p-5 w-full'
					onClick={() => changeTodo(todo.id)}
				>
					<Check isCompleted={todo.isCompleted} />

					<div className='w-full m-auto'>
						<div
							className={`${
								todo.isCompleted ? 'line-through' : ''
							} w-full m-auto`}
						>
							{todo.title}
						</div>
						<div
							className={`${
								todo.isCompleted ? 'line-through' : ''
							} w-full m-auto`}
						>
							{todo.description}
						</div>
					</div>
				</button>
			)}

			{edit == todo.id ? (
				<button
					className='flex items-center mb-4 bg-gray-800 p-5'
					onClick={() => saveTodo(todo.id)}
				>
					<Save />
				</button>
			) : (
				<>
					<button
						className='flex items-center mb-4 bg-gray-800 p-5'
						onClick={() => editTodo(todo.id, todo.title, todo.description)}
					>
						<Edit />
					</button>

					<button
						className='flex items-center mb-4 bg-gray-800 p-5'
						onClick={() => deleteTodo(todo.id)}
					>
						<Delete />
					</button>
				</>
			)}
		</div>
	)
}
export default TodoItem
