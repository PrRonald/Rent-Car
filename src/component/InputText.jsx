export const InputText = ({ inputInfo }) => {
    return (
        <section>
            {
                inputInfo.map(input => (
                    <div className="w-[90.2%]  " >
                        <label
                            className="font-semibold font-sans text-[14px] leading-[21px] text-[#1A202C]" 
                            htmlFor={input.labelfor}>
                            {input.label}
                        </label>
                        <input
                            className="placeholder:font-medium placeholder:font-sans placeholder:text-[12px]
                            placeholder:leading-[15.12px] placeholder:text-[#90A3BF] placeholder:pl-[24px]
                            h-[56px] w-full rounded-[10px] bg-[#F6F7F9] " 
                            type="text"
                            name={input.inputText}
                            id={input.labelfor}
                            placeholder={input.inputText}
                        />

                    </div>


                ))
            }
        </section>
    );
}