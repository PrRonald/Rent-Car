import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { getCarById } from "../App"
import { RentNow } from "../component/RentNow"
import { Prices } from "../component/Prices"
import { CiStar } from "react-icons/ci";


export const DetailCars = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)

    return (
        <>
            <section >
                <div className="w-full flex flex-col items-center  "  >
                    <div className="w-[86.667%] h-[320px] "  >
                        <div className="size-full   grid grid-rows-[232px_64px] gap-y-[24px] "  >
                            <div className="size-[100%] rounded-[10px] bg-blue-400 " ></div>
                            <div className=" size-full *:rounded-[10px] grid  grid-cols-[repeat(3,_92px)] gap-[7.4%] justify-center ">
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                                <div className="w-full h-[64px] bg-blue-400 " ></div>
                            </div>
                        </div>
                    </div>



                    <div className=" grid grid-rows-[46px_72px_48px_56px] gap-y-[16px] " >
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
                            <table>
                                <tr>
                                    <td>Type Car</td>
                                    <td>Sport</td>
                                    <td>Capacity</td>
                                    <td>{obj.seat}</td>
                                </tr>
                                <tr>
                                    <td>Steering</td>
                                    <td>{obj.engine}</td>
                                    <td>Gas</td>
                                    <td>{obj.fuel}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="flex flex-row justify-between " >
                            <Prices price={obj.price} beforePrice={obj.beforePrice} />
                            <RentNow url={"/paymentCarRent"} />

                        </div>
                    </div>


                </div>


            </section>

        </>
    );
}