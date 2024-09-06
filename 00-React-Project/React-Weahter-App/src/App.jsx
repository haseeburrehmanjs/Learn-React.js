import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Card from './Components/Card'

const App = () => {

    const [addweather, setaddweather] = useState([])
    let inputRef = useRef()

    function checkStatus(event) {
        event.preventDefault()
        // if input is empty
        if (inputRef.current.value === '') {
            alert('please enter city name')
        }

        async function getData() {
            try {
                let weatherData = await axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
                // console.log(weatherData.data);

                addweather.push({...weatherData.data})
                setaddweather([...addweather])
                console.log(addweather);
            } catch {
                alert('No City Found Please Try Another!')
            }
        }
        getData()
        inputRef.current.value = ''
    }

    return (
        <div>
            <h1 className='mt-5 text-4xl font-bold text-white text-center'>Weather App</h1>
            <form onSubmit={checkStatus} className='text-center mt-3 flex justify-center'>
                <input id='input' className='outline-none pl-2 w-[300px] py-3' type="text" placeholder='Enter city name!' ref={inputRef} /> 
                <button className='py-3 px-7 bg-green-600'>Check</button>
            </form>

            <div className='flex justify-center gap-2 flex-wrap mt-3'>
                {addweather.length > 0 && (addweather.map((item,index) => (
                    <div key={index}>
                        <Card location={item.location} condition={item}/>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default App
