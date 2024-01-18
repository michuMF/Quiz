import { useState, useCallback, useRef } from "react"
import questions from "../questions"
import QuizCompleted from "../assets/quiz-complete.png"
import Question from "./Question"

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
		return (
			<div id='summary'>
				<img src={QuizCompleted} alt='Quiz complete' />
				<h2>Quiz Completed</h2>
			</div>
		)
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
