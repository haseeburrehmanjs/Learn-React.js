import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {
    // get data from api
    useEffect(()=> {
        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.value}&aqi=no`)
    }, [])

    return (
        <>
            <form>
                <input type="text" placeholder='Enter Your City' />
                <button>Check</button>
            </form>
        </>
    )
}

export default App
