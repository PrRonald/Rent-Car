
export const ContentInf = ({children, title, description, steps}) => {
    return (
        <section>
            <div className="grid grid-cols-[80%_20%] grid-rows-[100%] justify-start " >
                <div>
                    <h1
                        className="text-16 font-bold text-secondary-500" >
                        {title}
                    </h1>
                    <h2
                        className="text-12 font-medium text-secondary-300" >
                        {description}
                    </h2>
                </div>
                <div >
                    <h2 
                        className="text-12 font-medium text-secondary-300" >
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