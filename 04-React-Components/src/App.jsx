import Card from "./Components/card"
import Navbar from "./Components/navbar"

function App() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default App