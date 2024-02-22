import { InfoCar } from "../component/InfoCar";
import { PickDropInfo } from "../component/PickDropInfo";

export const Body = () => {
    return (
        <section >
            <div className="w-full flex flex-col items-center" >

                <div className=" w-[90%] h-[auto]  " >

                    <div>
                        <PickDropInfo title={"Pick-Up"} />
                    </div>

                    <div>
                        <PickDropInfo title={"Drop-Off"} />
                    </div>

                </div>
                <div className="w-[90%]">
                    <InfoCar AlignXY={true} url={"detail"} />
                </div>

            </div>

        </section>
    );
}