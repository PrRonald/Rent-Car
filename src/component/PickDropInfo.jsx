export const PickDropInfo = ({ title}) => {
    return (
        <section className="w-full h-[127px] bg-white ">
            <div className="w-full ">

                <div className="p-2" >
                    <h1 className="text-16 font-semibold text-secondary-500 " >
                        {title}
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-3" >
                    <div className="p-2" >
                        <label
                            className="text-16 font-bold text-secondary-500 "
                            htmlFor="location"
                        >
                            Locations
                        </label>
                        <input
                            className=" w-full outline-none  "
                            type="text"
                            name="dates"
                            id="location"
                            placeholder="Rep. Dom" />
                    </div>
                    <div className="p-2" >
                        <label
                            className="text-16 font-bold text-secondary-500"
                            htmlFor="date"
                        >
                            Date
                        </label>
                        <input
                            className=" w-full text-12 font-regular text-secondary-300 outline-none "
                            type="date"
                            name="dates"
                            id="date"
                        />
                    </div>
                    <div className="p-2">
                        <label
                            className=" w-full text-16 font-bold text-secondary-500"
                            htmlFor="time"
                        >
                            Time
                        </label>
                        <input 
                            className=" w-full  text-12 font-regular text-secondary-300 outline-none "
                            type="time"
                            name="dates"
                            id="time" />
                    </div>
                </div>

            </div>
        </section>
    );
}