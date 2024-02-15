import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { getCarById } from "../App"
import { RentNow } from "../component/RentNow"
import { CiStar } from "react-icons/ci";
import { Reviews } from "../component/Reviews";


export const DetailCars = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)

    return (
        <>
            <section >
                <div className="w-full flex flex-col items-center "  >
                    <div className="w-[86.667%] h-auto grid grid-flow-row gap-y-[32px]  "  >
                        <div className="size-full   grid grid-rows-[232px_64px] gap-y-[24px] "  >
                            <div className="size-[100%] rounded-[10px] bg-blue-400 " ></div>
                            <div className=" size-full *:rounded-[10px] grid  grid-cols-[repeat(3,_92px)] gap-[7.4%] justify-center ">
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                            </div>
                        </div>



                        <div className=" grid grid-rows-[46px_72px_48px_56px]
                        gap-y-[16px] bg-white rounded-[10px] p-4 " >
                            <div>
                                <h1 className=" w-[174px] h-[24px] font-bold text-[20px] " > {obj.name} </h1>

                                <div className=" flex flex-row justify-start pt-2 ">
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <span className=" font-medium text-[12px] leading-[15.12px]
                            text-[#90A3BF] pl-2 " >440+ Reviewer</span>
                                </div>
                            </div>
                            <div>
                                <p className="w-[295px] h-[72px] font-normal text-[12px] leading-6 text-[#90A3BF] " >
                                    NISMO has become the embodiment of Nissan's outstanding
                                    performance, inspired by the most unforgiving proving
                                    ground, the "race track".
                                </p>
                            </div>
                            <div>
                                <table className="size-full text-xs  leading-[15.12px] " >
                                    <tbody>
                                        <tr className=" ">
                                            <td className=" text-[#90A3BF] " >Type Car</td>
                                            <td className=" text-[#1A202C] " >Sport</td>
                                            <td className=" text-[#90A3BF] " >Capacity</td>
                                            <td className=" text-[#1A202C] " >{obj.seat}</td>
                                        </tr>
                                        <tr>
                                            <td className=" text-[#90A3BF] " >Steering</td>
                                            <td className=" text-[#1A202C] " >{obj.engine}</td>
                                            <td className=" text-[#90A3BF] " >Gas</td>
                                            <td className=" text-[#1A202C] " >{obj.fuel}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-row justify-between " >
                                <div className=" w-[120px] h-[56px] ">
                                    <h1 className=" text-[20px] font-bold leading-[25.2px] text-[#1A202C] " >${obj.price}/
                                        <span className="font-bold text-[12px] leading-[15.12px] text-[#90A3BF] " >day</span></h1>
                                    <h2 className="font-bold text-[12px] leading-[15.12px] text-[#90A3BF] ">${obj.beforePrice}</h2>
                                </div>
                                <RentNow url={"/paymentCarRent"} w={"w-[140px]"} h={"h-[56px]"} />
                            </div>
                        </div>

                        <div>
                            <Reviews />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}