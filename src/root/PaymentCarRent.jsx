import { getCarById } from "../App";
import { useParams } from "react-router-dom"
import { cars } from "../component/InfoCar"
import { Footer } from "../component/Footer";
import { MorentName } from "../component/MorentName";
import { FaRegUserCircle } from "react-icons/fa";
import { TableBill } from "../component/TableBill";
import { BillDatail } from "../component/BillDatail";
import { InputText } from "../component/InputText";
import { ContentInf } from "../component/ContentInf";
import { PymentMethod } from "../component/PymentMethod";
import { Confirmation } from "../component/Confirmation";
import { RentNow } from "../component/RentNow";

export const PaymentCarRent = () => {

    const { carId } = useParams()
    const obj = getCarById(Number(carId), cars)

    const InputsBill = [
        { labelfor: "name", label: "Name", inputText: "Your name", type: "text" },
        { labelfor: "address", label: "Address", inputText: "Address", type: "text" },
        { labelfor: "phone", label: "Phone Number", inputText: "Phone number", type: "text" },
        { labelfor: "Towncity", label: "Town/City", inputText: "Town or city", type: "text" },
    ]

    const inputsRental = [
        { labelfor: "location", label: "Location", inputText: "Select your city", type: "text" },
        { labelfor: "time", label: "Time", inputText: "Set up the time", type: "select" },
        { labelfor: "date", label: "Date", inputText: "Select your date", type: "select" },
    ]
    
    return (
        <section>
            <div className=" grid grid-cols-[100%] grid-rows-[auto_auto_auto]  ">
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
                    <ContentInf
                        title={"Billing info"}
                        description={"Please enter your billing info"}
                        steps={"Step 1 of 4"}
                    >
                        <InputText inputInfo={InputsBill} />
                    </ContentInf>
                </div>
                <div>
                    <ContentInf
                        title={"Rental info"}
                        description={"Please enter your rental date"}
                        steps={"Step 2 of 4"}
                    >
                        <div>
                            <div>
                                <div className="p-2" >
                                    <h1
                                        className="text-[16px] font-semibold text-[#1A202C]  "
                                    >
                                        Pick-Up
                                    </h1>
                                </div>
                                <InputText inputInfo={inputsRental} />
                            </div>
                            <div>
                                <div className="p-2" >
                                    <h1
                                        className="text-[16px] font-semibold text-[#1A202C]  "
                                    >
                                        Drop-Off
                                    </h1>
                                </div>
                                <InputText inputInfo={inputsRental} />
                            </div>

                        </div>
                    </ContentInf>
                </div>
                <div>
                    <ContentInf
                        title={"Pyment Method"}
                        description={"Please enter your pyment method"}
                        steps={"Step 3 of 4"}
                    >
                        <div>
                            <PymentMethod />
                        </div>
                    </ContentInf>
                </div>
                <div className="size-full" >
                    <ContentInf
                        title={"Confirmation"}
                        description={"We are getting to the end just few clicks and your rental is ready"}
                        steps={"Step 4 of 4"}
                    >
                        <div className="flex flex-col justify-center  w-[90.2%]" >
                            <Confirmation text={" I agree with sending an Marketing and newsletter emails. No spam, promissed!"} />
                            <Confirmation text={" I agree with our terms and conditions and privacy policy!"} />
                        </div>
                        <div className="size-full" >
                            <RentNow url={"/"} w={"w-[100px]"} h={"h-[36px]"} />
                        </div>

                    </ContentInf>
                </div>
            </div>
        </section>
    );
}