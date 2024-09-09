import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [userDetails, setuserDetails] = useState(null)

  useEffect(() => {
    async function getDataFromDb() {
      let users = await axios(`https://jsonplaceholder.typicode.com/users`)
      console.log(users.data);
      setuserDetails(users.data)
    }
    getDataFromDb()
  }, [])

  return (
    <>
      <h1>User Details</h1>
      <div>
        {userDetails ? userDetails.map((item) => {
          return <div className='flex justify-between' key={item.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </div>
        }) : <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default App
