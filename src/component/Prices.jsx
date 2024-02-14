export const Prices = ({price, beforePrice}) => {
    return (
        <div>
            <h1 className=" text-[16px] font-semibold text-[#1A202C] " >${price}/
                <span className="font-medium text-[12px] text-[#90A3BF] " >day</span></h1>
            <h2 className="font-medium text-[12px] text-[#90A3BF] " >${beforePrice}</h2>
        </div>
    );
}