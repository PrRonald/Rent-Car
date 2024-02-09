export const PickDropInfo = ({ title }) => {
    return (
        <section className="w-full h-[127px] ">
            <div className="w-full ">

                <div className="p-2" >
                    <h1 className="text-[16px] font-semibold text-[#1A202C]  " >
                        {title}
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-3" >
                    <div  className="p-2" >
                        <label className="font-bold text-[16px] text-[#1A202C] " htmlFor="location">Locations</label>
                        <input className=" w-full  "
                            type="text" name="dates" id="location"  placeholder="Rep. Dom"/>
                    </div>
                    <div className="p-2" >
                        <label className="font-bold text-[16px] text-[#1A202C] " htmlFor="date">Date</label>
                        <input className=" w-full  " type="date" name="dates" id="date" />
                    </div>
                    <div className="p-2">
                        <label className="font-bold text-[16px] text-[#1A202C] " htmlFor="time">Time</label>
                        <input className=" w-full  " type="time" name="dates" id="time" />
                    </div>
                </div>

            </div>
        </section>
    );
}