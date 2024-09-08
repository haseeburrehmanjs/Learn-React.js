import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    let [quizData, setquizData] = useState([])
    const [index, setindex] = useState(0)

    useEffect(() => {
        async function getDataFromDb() {
            let question = await axios('https://the-trivia-api.com/v2/questions')
            console.log(question.data[index].question.text);
            setquizData(question.data)
        }
        getDataFromDb()
    }, [])

    function indexChange() {
        index < quizData.length - 1 ? setindex(index + 1) : alert('question khatum ho gain hain')
    }


    return (
        <>
            <h1>Hello World {index}</h1>
            <div>
                {quizData.length > 0 ? <h1>Q{index + 1}: {quizData[index].question.text}</h1> : <h1>Loading...</h1>}
            </div>
            <button onClick={indexChange}>Next</button>
        </>
    )
}

export default App
