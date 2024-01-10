import { BsCheckLg } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={`w-6 h-6 mr-2 flex items-center justify-center border-2 rounded-lg border-green-400 ${
				isCompleted ? 'bg-green-400' : ''
			}`}
		>
			{isCompleted && <BsCheckLg size={24} className='text-gray-900' />}
		</div>
	)
}
export default Check
