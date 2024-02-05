import { ButtonRent } from "./ButtonRent";

export const Cars = ({ carsname }) => {
    return (
        <section className="flex flex-col justify-center w-full h-auto">
            {carsname.map(ind => (
                <div className=" w-[100%] p-2 ">
                    <div className="grid grid-rows-[auto_auto_auto] justify-center border-yellow-700
                                     border-2 text-center "
                    >
                        <p> {ind.name} : {ind.year}</p>
                        <img src={ind.img} alt="Car" srcset="" />
                        <div>
                            <ButtonRent />
                        </div>

                    </div>
                </div>
            ))}
        </section>

    );
}

