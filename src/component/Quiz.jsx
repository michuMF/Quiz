import { useState, useCallback, useRef } from "react"
import questions from "../questions"
import Question from "./Question"
import Summary from "./Summary"

const Quiz = () => {
	const [userAnswer, setUserAnswer] = useState([])

	const activeQuestionIndex = userAnswer.length
	const quizIsComplete = activeQuestionIndex === questions.length

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setUserAnswer(prev => {
			return [...prev, selectedAnswer]
		})
	},
	[])

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	)

	if (quizIsComplete) {
		return <Summary userAnswer={userAnswer} />
	}

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	)
}
export default Quiz
