import { useParams } from "react-router-dom";
import { getImageById } from "./Home";

export const ViewCars = () => {

    const { carId } = useParams();
    const imgId = getImageById(carId);

    console.log(imgId.img);



    return (

        <section className=" " >
            <section className="w-full grid grid-cols-auto justify-items-center">
                <div className="w-[95%]  h-auto flex flex-row " >
                    <img className="w-[50vw]" src={`.${imgId.img}`} alt={imgId.name} />
                    <div>
                        <ul>
                            <li>items</li>
                            <li>items</li>
                            <li>items</li>
                            <li>items</li>
                            <li>items</li>
                            <li>items</li>
                        </ul>
                    </div>
                    <div>
                        <form action="" method="post"></form>
                    </div>
                </div>

            </section>
        </section >
    );
}

