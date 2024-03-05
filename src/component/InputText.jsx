export const InputText = ({ inputInfo, styles}) => {
    return (
        <section className={`size-[auto] ${styles} `} >
            {
                inputInfo.map(input => (
                    <div className="w-[90.2%]  " key={input.label} >
                        <label
                            className=" text-14 font-semibold text-secondary-500 "
                            htmlFor={input.labelfor}>
                            {input.label}
                        </label>
                        <input
                            className="placeholder:text-12 placeholder:font-medium placeholder:text-secondary-300
                            pl-[24px] outline-none h-[56px] w-full rounded-[10px] bg-[#F6F7F9] " 
                            type={input.type}
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