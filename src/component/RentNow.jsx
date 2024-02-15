import { Link } from "react-router-dom"



export const RentNow = ({ url, w, h }) => {


    return (
        <Link to={url} className={`${w} ${h}  bg-blue-500 text-[12px] felx 
        flex-col justify-center font-semibold text-white  inline-flex
        text-center rounded-[4px]`}>
                Rent Now
        </Link >
    )
}