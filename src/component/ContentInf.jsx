
export const ContentInf = ({children, title, description, steps}) => {
    return (
        <section>
            <div className="grid grid-cols-[80%_20%] grid-rows-[100%] justify-start " >
                <div>
                    <h1
                        className="font-bold font-sans text-[16px] leading-[24px] text-[#1A202C]" >
                        {title}
                    </h1>
                    <h2
                        className="font-medium font-sans text-[12px] leading-[15.12px] text-[#90A3BF]" >
                        {description}
                    </h2>
                </div>
                <div >
                    <h2 
                        className="font-medium font-sans text-[12px] leading-[15.12px] text-[#90A3BF]" >
                        {steps}
                    </h2>
                </div>
            </div>
            <div className="inputs" >
                {children}
            </div>
        </section>
    );
}