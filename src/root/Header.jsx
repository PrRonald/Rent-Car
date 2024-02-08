import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { Filter } from "../svg/Filter";
import { MorentName } from "../component/MorentName";

export const Header = () => {

    return (
        <section className="flex flex-row justify-center w-full h-[222px] " >

            <div className=" w-[86.667%] h-[74px]" >
                <div className=" grid grid-cols-2 w-full h-[74px] align-middle">
                    <IoIosMenu className="self-center size-[24px]" />
                    <FaRegUserCircle className="self-center justify-self-end size-[28px]" />
                </div>

                <div className="w-full h-[74px] flex flex-row items-center">
                    <MorentName />
                </div>


                <div className=" w-full h-[74px] flex flex-row items-center ">
                    <div className=" grid grid-cols-[80.923%_46px] gap-[12px] w-full" >
                        <div className="rounded-[10px] border-[1px]
                     border-[#C3D4E9] w-full h-[48px] flex flex-row justify-normal items-center">
                            <div className="size-[48px] ml-[20px] flex flex-row items-center">
                                <PiMagnifyingGlassThin className=" size-[24px] text-[#C3D4E9]  " />
                            </div>
                            <input className=" w-full rounded-[10px] border-[1px] outline-none border-none" 
                            name="hola" placeholder="Search something here"/>
                        </div>
                        <div className="rounded-[10px] border-[1px] 
                     border-[#C3D4E9] border-s w-auto">
                            <Filter />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}