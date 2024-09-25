import React, { useState } from 'react'

const Navbar = ({getAge}) => {
    const [age, setage] = useState(17)
    getAge(age)
    

    return (
        <div>
            <h1>hello react</h1>
            <button>Get Age</button>
        </div>
    )
}

export default Navbar
