import { InputText } from "./InputText";

export const BillingInfo = () => {

    const inputs = [
        { labelfor: "name", label: "Name", inputText: "Your name" },
        { labelfor: "address", label: "Address", inputText: "Address" },
        { labelfor: "phone", label: "Phone Number", inputText: "Phone number" },
        { labelfor: "Towncity", label: "Town/City", inputText: "Town or city" },
    ]

    return (
        <section>
            <div className="grid grid-cols-[80%_20%] grid-rows-[100%] justify-start " >
                <div>
                    <h1
                        className="font-bold font-sans text-[16px] leading-[24px] text-[#1A202C]" >
                        Billing info
                    </h1>
                    <h2
                        className="font-medium font-sans text-[12px] leading-[15.12px] text-[#90A3BF]" >
                        Please enter your billing info
                    </h2>
                </div>
                <div >
                    <h2 
                        className="font-medium font-sans text-[12px] leading-[15.12px] text-[#90A3BF]" >
                        Step 1 of 4
                    </h2>
                </div>
            </div>
            <div className="inputs" >
                <InputText inputInfo={inputs} />
            </div>
        </section>
    );
}