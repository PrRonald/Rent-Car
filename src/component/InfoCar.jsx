import { FaGasPump } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TbSteeringWheel } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { RentNow } from "./RentNow";
import { Prices } from "./Prices";

export const cars = [
    { id: 1, name: "All New Rush", fuel: "90L", model: "SUV", engine: "Manual", seat: 6, price: "90.00", beforePrice: "110.00", img: "./img/All-New-Rush.png" },
    { id: 2, name: "All New Terios", fuel: "80L", model: "SUV", engine: "Auto", seat: 4, price: "70.00", beforePrice: "90.00", img: "./img/All-New-Terios.png" },
    { id: 3, name: "CR-V", model: "SUV", fuel: "100L", engine: "Manual", seat: 6, price: "135.00", beforePrice: "150.00", img: "./img/CR-V.png" },
    { id: 4, name: "Kownigsegg", model: "SUV", fuel: "110L", engine: "Manual", seat: 6, price: "80.00", beforePrice: "0", img: "./img/Kownigsegg.png" },
    { id: 5, name: "New MGZS", model: "SUV", fuel: "90L", engine: "Auto", seat: 4, price: "100.00", beforePrice: "0", img: "./img/New-MGZS.png" },
];


export const InfoCar = () => {
    return (


        <section className=" w-full flex flex-col items-center   ">
            {
                cars.map(elem => (
                    <div className=" w-[91.38%]  " key={elem.id} >
                        <div className="grid grid-cols-2 gap-4" >
                            <div>
                                <h1 className="font-semibold text-[16px] text-[#1A202C] " >{elem.name}</h1>
                                <h2 className=" font-medium text-[12px] text-[#90A3BF] " >{elem.model}</h2>
                            </div>
                            <div className="justify-self-end">
                                <FaHeart className="text-red-500" />
                            </div>
                        </div>
                        <div className=" grid grid-cols-[auto_auto] mb-6 mt-6" >
                            <div >
                                <img src={elem.img} alt="car" />
                            </div>
                            <div className=" justify-self-center " >
                                <div className="flex flex-col justify-center" >
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " ><FaGasPump /></td>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " >{elem.fuel}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " ><GoPeople /> </td>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " >{elem.seat}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " ><TbSteeringWheel /></td>
                                            <td className="text-[12px] text-[#90A3BF] font-medium " >{elem.engine}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                        <div className=" grid grid-cols-2 mt-2 " >
                            <Prices price={elem.price} beforePrice={elem.beforePrice} />
                            <div className=" justify-self-end " > 
                                <RentNow  url={`detail/${elem.id}`}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
} 