function Button(probs){
    return (
        <>
        <button style={{background : 'black',
            color : 'white',
            padding: '10px 25px'
        }}>{probs.title}</button>
        </>
    )
}

export default Button