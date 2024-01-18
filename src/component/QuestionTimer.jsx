import { useEffect, useState } from "react"

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
	const [remainingTIme, setRemainingTime] = useState(timeout)

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout)
		return () => {
			clearTimeout(timer)
		}
	}, [timeout, onTimeout])

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime(prev => prev - 100)
		}, 100)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<progress
			id='question-time'
			max={timeout}
			value={remainingTIme}
			className={mode}
		/>
	)
}
export default QuestionTimer
