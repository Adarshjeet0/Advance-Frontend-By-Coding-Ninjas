export default function Card(){
    return (
        <div className="container flex justify-center items-center w-full bg-zinc-300">
            <div className="card-list w-3/6 p-2">
                <div className="card flex border-2 border-green-400 h-56 rounded-lg overflow-hidden bg-white">
                    <div className="card-left  w-1/4 relative">
                        <img src="../../public/avg.jpg" alt="Banner" className="h-full w-full"/>
                    </div>
                    <div className="card-right w-3/4 relative p-3 flex flex-col gap-3">
                        <div className="title text-2xl font-semibold ">The Avengers</div>
                        <div className="discription">Supernatural powers shown in the movie</div>
                        <div className="price">Rs. 199</div>
                        <div className="footer flex relative top-12 place-content-between items-center h-10 w-full p-2">
                            <div className="footer-left">
                                8.9
                            </div>
                            <div className="footer-right flex gap-5">
                                <div className="star"></div>
                                <button className="bg-violet-500 p-1 w-20 rounded-md">Favourite</button>
                                <button className="bg-red-500 p-1 w-20 rounded-md">Watch</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}