import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <section className="w-full 
                flex justify-center ">
            <section className=' md:bg-red-800  bg-yellow-500
                    text-[38px] text-center w-[90%] rounded-[35px] m-4 '>
                <Link to="/" >Home</Link>
            </section>
        </section>
    );
}