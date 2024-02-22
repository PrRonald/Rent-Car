export const TableBill = ({ price }) => {
    return (
        <section>
            <div className="w-full grid grid-cols-[auto] grid-rows-[48px_40px_48px] gap-[24px] " >
                <table className="w-full " >
                    <tbody>
                        <tr>
                            <td className="font-semibold font-sans text-[12px]
                             leading-[15.12px] text-[#90A3BF]    " >Subtotal</td>
                            <td
                                className="font-semibold font-sans text-[16px] text-end leading-[24px] text-[#1A202C] " >
                                {price}
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold font-sans text-[12px]
                             leading-[15.12px] text-[#90A3BF]    " >Tax</td>
                            <td className="font-semibold font-sans text-[16px] text-end leading-[24px] text-[#1A202C] " >
                                $0
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="w-full flex flex-row justify-center
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
                </div>

                <div className="grid grid-cols-[70%_30%] grid-rows-[48px] items-center ">
                    <div className="flex flex-col justify-start">
                        <span
                            className="font-bold font-sans text-[16px] leading-[24px] text-[#1A202C] ">
                            Total Rental Price
                        </span>
                        <span
                            className="font-normal font-sans text-[12px] leading-[15.12px] text-[#90A3BF] " >
                            Overll price rental
                        </span>
                    </div>
                    <div className="justify-self-end" >
                        <span
                            className="font-bold font-sans text-[20px] leading-[30px] text-[#1A202C]
                            pt-[24px]  " >
                            {price}
                        </span>
                    </div>




                </div>



            </div>
        </section>
    );
}