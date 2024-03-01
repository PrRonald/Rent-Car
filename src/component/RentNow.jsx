import { Link } from "react-router-dom"



export const RentNow = ({ url, w, h }) => {
    return (
        <Link 
            to={url} 
            className={`${w} ${h} flex justify-center items-center
            text-12 font-bold text-white rounded-[4px] bg-primary-500`}>
            Rent Now
        </Link >
    )
}