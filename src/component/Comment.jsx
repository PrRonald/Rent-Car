import { CiStar } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";


const comments = [
    {id: 1, name: "Luis Nunez", comment: "The best car", date: "12 July 2023", carrer: "Full stack Developer"},
    {id: 1, name: "Ronald Valdez", comment: "The best car", date: "12 Agost 2022", carrer: "Doctor"},
    {id: 1, name: "Chelsea de Nunez", comment: "The best car", date: "12 July 2022", carrer: "Full stack Developer"},
    {id: 1, name: "Horeb Nunez", comment: "I find the correct car in a short time", date: "12 July 2022", carrer: "Full stack Developer"},
    {id: 1, name: "Grace Nunez", comment: "The best car", date: "18 Februry 2021", carrer: "Full stack Developer"},
]
export const Comment = () => {
    return (

        <section>
            {comments.map(elem => (
            <section className="size-full grid grid-cols-[50px_auto] " >

            <div className=" size-[44px] rounded-fulljustify-self-center ">
            <FaRegUserCircle className="size-full text-sm" />

            </div>

            <div >
                <div className="w-full grid grid-cols-2  justify-between" >

                    <div>
                        <h1 className="font-semibold text-[16px] leading-[24px] " >{elem.name}</h1>
                        <h2 className="font-medium bold text-[12px] leading-[15.12px] text-[#90A3BF] " >{elem.carrer}</h2>
                    </div>

                    <div className="flex flex-col items-end justify-center"  >
                        <h2 className="font-medium text-[12px] leading-[15.12px] text-[#90A3BF] " >{elem.date}</h2>
                        <div className="inline-flex " >
                            <CiStar className="size-[12px]" />
                            <CiStar className="size-[12px]" />
                            <CiStar className="size-[12px]" />
                            <CiStar className="size-[12px]" />
                            <CiStar className="size-[12px]" />
                        </div>

                    </div>

                </div>


                <div>
                    <p className=" font-normal text-[12px] leading-[24px]
                    text-[#90A3BF] mt-4 mb-4 ">
                        {elem.comment}
                    </p>
                </div>
            </div>

        </section>

        ))}
       
            
        </section>
    );
}