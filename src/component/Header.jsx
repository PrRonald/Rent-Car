import { FaRegUserCircle } from "react-icons/fa";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MorentName } from "./MorentName";

export const Header = () => {
    return (
        <section className="w-full h-[140px] bg-white grid grid-cols-[50%_50%] items-center 
            lg:grid-cols-[18.9%_auto_18.6%] lg:grid-rows-[124px] " >
            <div className="w-full place-self-center col-start-1 col-end-2 ">
                <MorentName />
            </div>

            <div className="w-[auto] flex flex-row justify-end lg:justify-start ">
                

                <div className="w-full hidden lg:inline ">
                    <FaHeart  className="size-[24px]" />
                </div>
                <div className="w-full hidden lg:inline ">
                    <FaBell  className="size-[24px]" />
                </div>
                <div className="w-full hidden lg:inline ">
                    <FaGear className="size-[24px]" />
                </div>

                <div className="lg:inline  " >
                    <FaRegUserCircle className=" size-[28px]" />
                </div>
            </div>

            
            <div className=" w-full h-[74px] flex flex-row items-center 
            lg:row-start-1 col-span-2 lg:col-start-2 lg:col-end-3 lg:w-[492px]">
                <div
                    className=" grid grid-cols-[80.923%_auto] gap-[3%]  w-full" >
                    <div
                        className="rounded-[10px] border-[1px] border-[#C3D4E9] w-full h-[48px]
                        flex flex-row justify-normal items-center">
                        <div
                            className="size-[48px] ml-[20px] flex flex-row items-center">
                            <PiMagnifyingGlassThin
                                className=" text-3xl size-[24px] text-[#C3D4E9]  " />
                        </div>
                        <input
                            className=" w-full rounded-[10px] border-[1px] outline-none border-none"
                            name="search"
                            placeholder="Search something" />
                    </div>
                    <div
                        className="rounded-[10px] border-[1px] border-[#C3D4E9] border-s w-auto
                            flex justify-center items-center ">
                        <img
                            className="size-[24px]"
                            src="../svg/Filter.svg"
                            alt="filter" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export const HeaderPayment = () => {
    return (
        <div className=" grid grid-cols-2 w-full h-[74px] align-middle bg-white ">
            <div className="self-center size-[24px]"  >
                <MorentName />
            </div>
            <FaRegUserCircle className="self-center justify-self-end size-[28px]" />
        </div>
    )
}

{/* <div className=" grid grid-cols-2 w-full h-[74px] align-middle ">
                <IoIosMenu className="self-center size-[24px]" />
                <FaRegUserCircle className="self-center justify-self-end size-[28px]" />
            </div> */}