export const ApplyOffer = () => {
    return (
        <section className="w-full flex flex-row justify-center
                items-center rounded-[10px] bg-[#F6F7F9] selection:border-none" >
            <input
                className=" placeholder:font-medium  placeholder:font-sans
                        placeholder:text-[12px]  placeholder:leading-[15.12px]
                        placeholder:text-[#90A3BF] outline-none bg-[#F6F7F9]"
                type="text"
                name="text-code"
                id="text-code"
                placeholder="Apply Promo Code" />
            <label
                className="font-semibold font-sans text-[12px] leading-[15.12px] text-[#1A202C]"
                htmlFor="text-code">Apply Now</label>
        </section>
    );
}