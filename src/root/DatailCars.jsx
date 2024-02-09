import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { getCarById } from "../App"

export const DetailCars = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)
    
    return (
        <>

            <section >
                <div className="w-full flex flex-col items-center"  >
                    <div className="w-[86.667%] "  >
                        <div className="w-full bg-blue-500 h-[232px] rounded-[10px] ">
                            <div className="grid grid-rows-3 justify-center h-full" >
                                <h1>
                                    Sport car with the best dessing and acceleration
                                </h1>
                                <p>
                                    Saety and comfort while driving futuristic and elegant sport cart
                                </p>
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