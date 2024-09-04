function Navbar() {
    return (
        <>
            <div className="flex p-4 items-center justify-between bg-blue-600">
                <div>
                    <h1 className="font-poppins font-bold text-white text-2xl">Hello World</h1>
                </div>
                <div className="mx-4">
                    <ul className="flex gap-5 cursor-pointer">
                        <li className="hover:text-white">Contact</li>
                        <li className="hover:text-white">About</li>
                        <li className="hover:text-white">Servises</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar