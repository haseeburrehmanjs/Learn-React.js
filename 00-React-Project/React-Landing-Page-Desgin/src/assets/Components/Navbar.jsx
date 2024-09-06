function Navbar() {
    return (
        <>
        <nav className="p-4 bg-slate-100">
            <div className="flex justify-between flex-wrap mx-[130px]">
                <p className="text-2xl font-bold uppercase ">Agnecy Age</p>
                <ul className="flex gap-6 items-center">
                    <li className="hover:text-cyan-400">New Agency</li>
                    <li className="hover:text-cyan-400">Pricing</li>
                    <li><button className=" hover:bg-purple-900 bg-purple-800 px-6 py-2 text-white rounded-lg">Login</button></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar