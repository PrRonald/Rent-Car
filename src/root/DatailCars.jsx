import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { getCarById } from "../App"

export const DetailCars = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)

    return (
        <>

            <section >
                <div className="w-full flex flex-col items-center  " style={{ backgroundImage: `url("/rectangle.svg")` }}  >
                    <div className="w-[86.667%] "  >
                        <div className="w-full bg-blue-500 h-[232px] rounded-[10px] ">
                            <div className="grid grid-rows-2 justify-items-center align-middle h-full" >
                                <div className="size-[100%] " >
                                    <h1 className="m-[16px] w-[90.2%] h-[40px] font-semibold text-[16px] text-white " >
                                        Sport car with the best dessing and acceleration
                                    </h1>
                                    <p className=" m-[16px]  font-medium text-white text-[12px] w-[90.2%] h-[30px] " >
                                        Saety and comfort while driving futuristic and elegant sport cart
                                    </p>
                                </div>

                                <div className="w-full flex justify-center mb-[20px] ">
                                    <img className=" w-[190px] h-[60px] self-end  " src={`.${obj.img}`} alt="Cars Img" />
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-3 w-full justify-items-center items-center h-[70px] " >
                            <div className="size-[50px] rounded-[10px] bg-black ">

                            </div>
                            <div className="size-[50px] rounded-[10px] bg-black ">

                            </div>
                            <div className="size-[50px] rounded-[10px] bg-black ">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}