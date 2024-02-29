export const Confirmation = ({ text }) => {
    return (
        <div className="h-[64px] rounded-[10px] bg-[#F6F7F9]" >
            <div className="size-full grid grid-cols-[20%_80%] grid-rows-[auto] align-middle place-items-center  ">
                <input
                    className="size-[16px] "
                    type="checkbox"
                    name=""
                    id="markingCheck" />
                <label
                    className="font-medium font-sans text-[12px] leading-[19.2px] text-[#1F2544]"
                    htmlFor="markingCheck">
                    {text}
                </label>
            </div>
        </div>
    );
}