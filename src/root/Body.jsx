import { InfoCar } from "../component/InfoCar";
import { PickDropInfo } from "../component/PickDropInfo";
import { HiArrowsUpDown } from "react-icons/hi2";

export const Body = () => {
    return (
        <section >
            <div className=" h-[auto] w-full grid  grid-cols-1  grid-rows-[auto_60px_auto] justify-center 
            lg:grid lg:grid-cols-[40.42%_148px_40.42%] lg:grid-rows-[132px]  " >
                <div className=" self-start " >
                    <PickDropInfo title={"Pick-Up"} />
                </div>
                <div className="place-self-center " >
                    <button className="size-[60px] bg-primary-500 rounded-[10px] flex justify-center items-center  " >
                        <HiArrowsUpDown className="size-[24px] text-white " />
                    </button >
                </div>
                <div  >
                    <PickDropInfo title={"Drop-Off"} />
                </div>
            </div>
            <div className="self-end">
                <InfoCar AlignXY={true} url={"detail"} />
            </div>
        </section>
    );
}