import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    const [quizQuestion, setquizQuestion] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [choices, setChoices] = useState([])
    const [selectedChoice, setSelectedChoice] = useState('')
    const [rightAnswer, setrightAnswer] = useState(0)
    const [wrongAnswer, setwrongAnswer] = useState(0)

    function nextBtn() {
        if (questionIndex < quizQuestion.length - 1) {
            setQuestionIndex(questionIndex + 1)
            setSelectedChoice('') // Reset selected choice for the next question
            console.log(selectedChoice);
            if(selectedChoice === quizQuestion[questionIndex].correct_answer){
                console.log('right answer');
                setrightAnswer(rightAnswer + 1)
            }else {
                console.log('wrong anse'); 
                setwrongAnswer(wrongAnswer + 1)
            }
            
        } else {
            alert('All questions have been answered.')
        }
    }

    useEffect(() => {
        async function getData() {
            let quiz = await axios('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
            setquizQuestion(quiz.data.results)

            const firstQuestion = quiz.data.results[0]
            console.log(firstQuestion);
            
            const allChoices = [...firstQuestion.incorrect_answers, firstQuestion.correct_answer]
            setChoices(shuffleArray(allChoices))
        }
        getData()
    }, [])

    useEffect(() => {
        if (quizQuestion.length > 0) {
            const currentQuestion = quizQuestion[questionIndex]
            const allChoices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
            setChoices(shuffleArray(allChoices))
        }
    }, [questionIndex, quizQuestion])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    return (
        <>
            <div>
                {quizQuestion.length > 0 ? (
                    <h1>
                        Q{questionIndex + 1}: {quizQuestion[questionIndex].question}
                    </h1>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            <form>
                {choices.map((choice, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`choice-${index}`}
                            name="quiz"
                            value={choice}
                            checked={selectedChoice === choice}
                            onChange={(e) => setSelectedChoice(e.target.value)}
                        />
                        <label htmlFor={`choice-${index}`}>{choice}</label>
                    </div>
                ))}
            </form>
            <button onClick={nextBtn}>Next</button>
            <div>{questionIndex === questionIndex  && <h1>Right Answer{rightAnswer}/ Wrong Answer {wrongAnswer}</h1>}</div>
        </>
    )
}

export default App
