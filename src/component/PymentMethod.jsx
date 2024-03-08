import React, { useState } from 'react';
import { InputText } from './InputText';

const Visa = [
    { labelfor: "carname", label: "Car Name", inputText: "Car Name", type: "text" },
    { labelfor: "carholder", label: "Car Holder", inputText: "Car Holder", type: "text" },
    { labelfor: "expirationdate", label: "Expiration Date", inputText: "DD/MMYY", type: "text" },
    { labelfor: "cvc", label: "CVC", inputText: "CVC", type: "text" },
]

export const PymentMethod = () => {

    const options = [
        { value: '1', label: 'Visa', component: <Tag1 />, img: "../svg/Visa.svg" },
        { value: '2', label: 'Paypal', component: <Tag2 />, img: "../svg/PayPal.svg" },
        { value: '3', label: 'Bitcoin', component: <Tag3 />, img: "../svg/Bitcoin.svg" },
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='w-full h-full bg-white ' >
            {options.map((option, index) => (
                <div
                    className='size-full grid grid-rows-[auto-auto] grid-cols-1 justify-center'
                    key={index}  >
                    <div className='w-full h-[52px] pl-[5.42%] pr-[5.42%] rounded-[10px] br-[#F6F7F9]
                                    grid grid-cols-[50%_50%] justify-center border-black '  >
                        <div className='size-full' >

                            <input
                                type="radio"
                                id={option.value}
                                name="conditional-input" 
                                value={option.value}
                                checked={selectedValue === option.value}
                                onChange={handleChange}
                                className='border-[#90A3BF] '
                            />
                            <label
                                htmlFor={option.value}
                                className="font-semibold font-snas text-[14px] leading-[21px]
                                text-[#1A202C] pl-[8px]" >
                                {option.label}
                            </label>


                        </div>
                        <img className="justify-self-end" src={option.img} alt={option.img} />

                    </div>
                    <div className={(selectedValue === option.value) ? " w-[100%]:" : "hidden"}>
                        {option.component}
                    </div>
                </div>
            ))}
        </div>
    );
};

const Tag1 = () => {
    return (
        <InputText inputInfo={Visa} styles={"flex flex-col items-center"} />
    );
}

const Tag2 = () => {
    return (
        <p>Item:2</p>
    );
}
const Tag3 = () => {
    return (
        <p>Item:3</p>
    );
}