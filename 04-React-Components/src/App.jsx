import Card from "./Components/card"
import Navbar from "./Components/navbar"
import Button from "./Components/Button"

function App() {
    return (
        <>
            <Navbar />
            <Button />
            <div className="flex justify-between mx-4 mt-4">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default App