import { FaGasPump } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TbSteeringWheel } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { RentNow } from "./RentNow";

export const cars = [
    { id: 1, name: "All New Rush", fuel: "90L", model: "SUV", engine: "Manual", seat: 6, price: "90.00", beforePrice: "110.00", img: "./img/All-New-Rush.png" },
    { id: 2, name: "All New Terios", fuel: "80L", model: "SUV", engine: "Auto", seat: 4, price: "70.00", beforePrice: "90.00", img: "./img/All-New-Terios.png" },
    { id: 3, name: "CR-V", model: "SUV", fuel: "100L", engine: "Manual", seat: 6, price: "135.00", beforePrice: "150.00", img: "./img/CR-V.png" },
    { id: 4, name: "Kownigsegg", model: "SUV", fuel: "110L", engine: "Manual", seat: 6, price: "80.00", beforePrice: "0", img: "./img/Kownigsegg.png" },
    { id: 5, name: "New MGZS", model: "SUV", fuel: "90L", engine: "Auto", seat: 4, price: "100.00", beforePrice: "0", img: "./img/New-MGZS.png" },
];


export const InfoCar = ({AlignXY, url}) => {
    
    return (

        <section className={` w-full ${AlignXY ? "flex flex-col items-center gap-5 "
        : "grid grid-flow-col  overflow-scroll gap-y-4 overflow-y-hidden " }   `} >
            {
                cars.map(elem => (
                    <div className={`${AlignXY ? "w-[91.4%] " 
                    :  "grid grid-rows-[44px_auto_60px] justify-center w-[240px] h-[286px]"}`} key={elem.id} >
                        <div className="grid grid-cols-[80%_20%] gap-4 " >
                            <div>
                                <h1 className="text-16 font-semibold text-secondary-500 " >{elem.name}</h1>
                                <h2 className=" text-12 font-medium text-secondary-300 " >{elem.model}</h2>
                            </div>
                            <div className="justify-self-end">
                                <FaHeart className="text-red-500" />
                            </div>
                        </div>

                        <div className={` ${ AlignXY ? "grid grid-cols-[50%_50%] ] mb-6 mt-6":
                        "grid grid-rows-[auto_auto] gap-[20px] justify-items-center items-center"} `} >
                            <div >
                                <img src={`${AlignXY ? elem.img : "." + elem.img}`} alt="car" />
                            </div>
                            <div className={`${AlignXY ? "justify-self-end" : "w-[204px] h-[14px] " }`}      >
                                <div className="flex flex-row justify-center" >
                                    <table  >
                                        <tbody className={`${AlignXY ? "" : " grid grid-cols-3 "}`} >
                                            <tr>
                                                <td className="text-12 font-medium text-secondary-300" ><FaGasPump /></td>
                                                <td className="text-12 font-medium text-secondary-300" >{elem.fuel}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-12 font-medium text-secondary-300" ><GoPeople /> </td>
                                                <td className="text-12 font-medium text-secondary-300" >{elem.seat}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-12 font-medium text-secondary-300" ><TbSteeringWheel /></td>
                                                <td className="text-12 font-medium text-secondary-300" >{elem.engine}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                        <div className=" grid grid-cols-[50%_50%] mt-2 " >
                            <div >
                                <h1 className=" text-16 font-semibold text-secondary-500 " >${elem.price}/
                                    <span className="text-12 font-medium  text-secondary-300 " >day</span></h1>
                                <h2 className="font-medium text-12 text-secondary-300  ">${elem.beforePrice}</h2>
                            </div>
                            <div className=" justify-self-end " >
                                <RentNow url={`${url}/${elem.id}`} w={"w-[100px]"} h={"h-[30px]"}  />
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
} 