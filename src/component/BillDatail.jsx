import { CiStar } from "react-icons/ci";



export const BillDatail = ({ img, name }) => {
    return (
        <section className="grid grid-rows-[auto_auto] grid-cols-[auto] gap-[24px]" >
            <div>
                <h1 className="w-[295px] h-[24px] text-16 font-bold text-secondary-500 " >
                    Rental Summary 
                </h1>
                <p className=" w-[295px] h-[40px] font-medium font-plus text-[12px] leading-[19.2px] text-[#90A3BF] " >
                    Prices may change depending on the length of the
                    rental and the price of
                    your rental car.
                </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-[60px] gap-[16px] " >
                <div  >
                    <img 
                        className="px-[7px] py-[24px] bg-blue-500 rounded-[8px]" 
                        src={img} 
                        alt="cars" />
                </div>
                <div>
                    <h1 className=" h-[24px] font-bold text-[20px] text-sencodary-500 font-sans "  > {name} </h1>
                    <div className="h-[12px] flex flex-col justify-start pt-2 " >
                        <div className="inline-flex">
                            <CiStar className="text-[12px]  " />
                            <CiStar className="text-[12px]  " />
                            <CiStar className="text-[12px]  " />
                            <CiStar className="text-[12px]  " />
                            <CiStar className="text-[12px]  " />

                        </div>
                        <h2 
                            className=" h-[16px] text-12 font-medium text-secondary-400" >
                            440+ Reviewer
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
}