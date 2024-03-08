import { Link, useRouteError } from "react-router-dom";
import { MdCloudOff } from "react-icons/md";

export const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className=" w-full h-[100vh] flex flex-col
         justify-center items-center " style={{backgroundImage:`url("/svg/construction.svg")`}}
        id="error-page">
            
            <div className="size-[50%] border-2 border-red-700 rounded-md " >
                <div className="flex flex-col justify-center items-center size-[100%] " >
                    <h1 className="text-3xl text-gray-400 font-semibold text-[16px] ">
                        Error Page
                    </h1>
                    <h2 className="text-[12px] text-red-700 font-sans " >
                        {error.statusText || error.message}
                    </h2>
                    <MdCloudOff className="text-[12px] text-gray-400 font-sans " />
                    <Link className="text-3xl text-blue-400 font-semibold text-[16px] " to="/" >Home</Link>
                </div>

            </div>
        </div>
    );
}
