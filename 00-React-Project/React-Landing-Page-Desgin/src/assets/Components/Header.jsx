function Header() {
    return (
        <>
            <section className="mx-3 mt-10">
                <div className="flex items-center flex-wrap justify-center mx-[100px]">
                    <div>
                        <p className="text-3xl">Trun your big idea into</p>
                        <p className="text-5xl font-bold mt-3">Something Bigger</p>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus <br/> assumenda itaque impedit ratione, non debitis.</p>
                        <button className=" mt-4 hover:bg-purple-900 bg-purple-800 px-6 py-2 text-white rounded-lg">Check</button>
                    </div>
                    <div>
                        <img className="w-[600px]" src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201724929744634?alt=media&token=72dd920c-d593-4f04-9077-27bb2d3783ac" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header