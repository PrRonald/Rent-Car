import { Link } from "react-router-dom";

export const Cars = ({ carsname }) => {

    return (
        <section className="flex flex-col justify-center w-full h-auto">
            {carsname.map(ind => (
                <div key={ind.id} className=" w-[100%] p-2 ">
                    <div className="grid grid-rows-[auto_auto_auto] justify-center border-blue-700
                    border-2 text-center "
                    >
                        <p className=" font-mono text-3xl "> {ind.name} : {ind.year}</p>
                        <img src={ind.img} alt="Car" />
                        <div className="w-full bg-red-100 flex justify-center">
                            <div className="m-4 rounded-lg border-2 border-blue-700 hover:bg-blue-500
                             w-[150px] h-[35px] bg-blue-200 " >
                                <Link className=" font-mono text-3xl  "
                                    to={`/car/${ind.name}`} >
                                    Rent
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>

    );
}



