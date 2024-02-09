import { Link } from "react-router-dom"



export const RentNow = ({ id }) => {


    return (
        <Link to={`detail/${id}`} className="w-[100px] h-[36px] bg-blue-500 text-[12px] felx 
            flex-col justify-center font-semibold text-white  inline-flex
            text-center rounded-[4px]" >
                Rent Now
        </Link >
    )
}