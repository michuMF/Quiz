import QuizCompleted from "../assets/quiz-complete.png"
import questions from "../questions"

const Summary = ({ userAnswer }) => {
	const skippedAnswers = userAnswer.filter(answer => answer === null)

	const correctAnswers = userAnswer.filter(
		(answer, index) => answer === questions[index].answers[0]
	)

	const skippedAnswerShare = Math.round(
		(skippedAnswers.length / userAnswer.length) * 100
	)
	const correctAnswerShare = Math.round(
		(correctAnswers.length / userAnswer.length) * 100
	)
	const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare

	return (
		<div id='summary'>
			<img src={QuizCompleted} alt='Quiz complete' />
			<h2>Quiz Completed</h2>
			<div id='summary-stats'>
				<p>
					<span className='number'>{skippedAnswerShare}%</span>
					<span className='text'>skipped</span>
				</p>
				<p>
					<span className='number'>{correctAnswerShare}%</span>
					<span className='text'>answer correctly</span>
				</p>
				<p>
					<span className='number'>{wrongAnswerShare}%</span>
					<span className='text'>answered incorrectly</span>
				</p>
			</div>
			<ol>
				{userAnswer.map((answer, index) => {
					let cssClasses = "user-answer"
					if (answer === null) {
						cssClasses += " skipped"
					} else if (answer === questions[index].answers[0]) {
						cssClasses += " correct"
					} else {
						cssClasses += " wrong"
					}

					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className='question'>{questions[index].answers}</p>
							<p className={cssClasses}>{answer ?? "Skipped"}</p>
						</li>
					)
				})}
			</ol>
		</div>
	)
}
export default Summary
