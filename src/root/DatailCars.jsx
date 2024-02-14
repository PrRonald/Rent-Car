import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { getCarById } from "../App"
import { RentNow } from "../component/RentNow"


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



                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div>
                    <RentNow url={"/paymentCarRent"} />

                    </div>
                </div>



            </section>

        </>
    );
}


// <div className="w-full bg-blue-500 h-[232px] rounded-[10px] ">
//                             <div className="grid grid-rows-2 justify-items-center align-middle h-full" >
//                                 <div className="size-[100%] " >
//                                     <h1 className="m-[16px] w-[90.2%] h-[40px] font-semibold text-[16px] text-white " >
//                                         Sport car with the best dessing and acceleration
//                                     </h1>
//                                     <p className=" m-[16px]  font-medium text-white text-[12px] w-[90.2%] h-[30px] " >
//                                         Saety and comfort while driving futuristic and elegant sport cart
//                                     </p>
//                                 </div>

//                                 <div className="w-full flex justify-center mb-[20px] ">
//                                     <img className=" w-[190px] h-[60px] self-end  " src={`.${obj.img}`} alt="Cars Img" />
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="grid grid-cols-3 w-full justify-items-center items-center h-[70px] " >
//                             <div className="size-[50px] rounded-[10px] bg-black ">

//                             </div>
//                             <div className="size-[50px] rounded-[10px] bg-yellow-200 ">
//                             </div>
//                             <div className="size-[50px] rounded-[10px] bg-yellow-100 ">
//                             </div>
//                         </div>