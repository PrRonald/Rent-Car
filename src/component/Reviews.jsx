import { Comment } from "./Comment";
import { IoIosArrowDown } from "react-icons/io";



export const Reviews = () => {
    return (
        <section className=" bg-[#FFFFFF]  rounded-[10px] " >

            <div className="grid grid-rows-[40px_auto_40px] m-4 " >
                <div className="flex flex-row justify-start w-full">
                    <h1 className=" font-semibold text-[20px] leading-[30px] " >Reviews</h1>
                    <span className=" w-[48px] h-[28px] rounded-[4px] bg-blue-500
                    font-bold text-white flex justify-center items-center ml-3 " >13</span>
                </div>
                <div className="w-full" >
                    <Comment />
                </div>
                <div className="w-full h-auto flex flex-row justify-center items-center" >
                    <h1 className="text-[14px] font-normal leading-[17.64px] text-[#90A3BF] " >View All</h1>
                    <IoIosArrowDown className="text-[#90A3BF] size-[14px] ml-2 " />
                </div>
            </div>

        </section>
    );
}