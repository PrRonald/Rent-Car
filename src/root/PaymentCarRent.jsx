import { getCarById } from "../App";
import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { Footer } from "../component/Footer";
import { MorentName } from "../component/MorentName";
import { FaRegUserCircle } from "react-icons/fa";
import { TableBill } from "../component/TableBill";
import { BillDatail } from "../component/BillDatail";
import { BillingInfo } from "../component/BillingInfo";




export const PaymentCarRent = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)

    return (
        <section>
            <div className="h-auto w-full grid grid-rows-[auto_auto_auto]
            grid-cols-[87.2%] justify-center " >

                {/* Header */}
                <div className=" grid grid-cols-2 w-full h-[74px] align-middle">
                    <div className="self-center size-[24px]"  >
                        <MorentName />
                    </div>
                    <FaRegUserCircle className="self-center justify-self-end size-[28px]" />
                </div>

                {/* Body */}
                <div  >
                    {/* Summary */}
                    <div className="h-[424px] grid grid-cols-[100%] grid-rows-[auto_auto]  ">
                        <div  >
                            <BillDatail img={`.${obj.img}`} name={obj.name} />
                        </div>

                        <div className="pt-[36px]" >
                            <TableBill price={obj.price} />
                        </div>
                    </div>

                    <div>
                        <BillingInfo />
                    </div>
                </div>

            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>


        </section>

    );
}