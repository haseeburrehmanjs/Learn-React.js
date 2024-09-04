// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [questions, setquestions] = useState([])

//   // get data from database
//   useEffect(() => {
//     axios('https://the-trivia-api.com/v2/questions')
//     .then(res => {
//       // console.log(res.data);
//       setquestions([res.data])
//       console.log(questions);
      
//     }).catch(error => {
//       console.log(error);
//     })
//   }, [])


//   return (
//     <>
//       <h1>Quiz</h1>
//       <div>
//         {questions ? <h1>{questions.data}</h1> : 'loading...'}
//       </div>
//     </>
//   )
// }

// export default App



