import {useParams} from "react-router-dom";
import { getImageById } from "./Home";

export const ViewCars = () => {

    const { carId } = useParams();
    const imgId = getImageById(carId);

    console.log(imgId.img);

    

    return (
        
        <>
            <p>{carId}</p>
            <p>Hola</p>
            <img  src={`.${imgId.img}`} alt={imgId.name}/>

        </>
    );
}

