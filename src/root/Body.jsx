import { InfoCar } from "../component/InfoCar";
import { PickDropInfo } from "../component/PickDropInfo";

export const Body = () => {
    return (
        <section >
            <div className=" h-[auto]  " >
                <div>
                    <PickDropInfo title={"Pick-Up"} />
                </div>
                <div>
                    <PickDropInfo title={"Drop-Off"} />
                </div>
            </div>
            <div className="">
                <InfoCar AlignXY={true} url={"detail"} />
            </div>
        </section>
    );
}