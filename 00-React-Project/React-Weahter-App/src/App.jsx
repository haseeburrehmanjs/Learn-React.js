import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [addweather, setaddweather] = useState(null)
    let inputRef = useRef()

    useEffect(() => {

    }, [checkStatus])

    function checkStatus(event) {
        event.preventDefault()
        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
            .then(responce => {
                console.log(responce.data);
                setaddweather(responce.data)
                // console.log(addweather);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <h1>Hello World</h1>
            <form onSubmit={checkStatus}>
                <input type="text" placeholder='Enter city name!' ref={inputRef} />
                <button>Check</button>
            </form>

            {/* <div>
                {addweather ? <div className="card mx-auto" style={{ width: "30rem" }}>
                    <div className="card-body text-center">
                        <h5 className="card-title" id="location">
                            {addweather.location.name}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted" id="date">
                            {addweather.location.date}
                        </h6>
                        <img
                            src="${data.current.condition.icon}"
                            alt="Weather Icon"
                            className="mb-2 Weather-Icon"
                            id="weather-icon"
                        />
                        <h2 className="card-text" id="temperature">
                            ${}
                        </h2>
                        <p className="card-text" id="description">
                            ${"{"}data.current.condition.text{"}"}
                        </p>
                    </div>
                </div>
                    : 'loading'}
            </div> */}
        </>
    )
}

export default App
