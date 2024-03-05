import { ApplyOffer } from "./ApplyOffer";

export const TableBill = ({ price }) => {
    return (
        <section>
            <div className="w-full grid grid-cols-[auto] grid-rows-[48px_40px_48px] gap-[24px] " >
                <table className="w-full " >
                    <tbody>
                        <tr>
                            <td className="text-12 font-semibold text-secondary-300 " >
                                Subtotal
                            </td>
                            <td className="text-16 font-semibold text-secondary-500 text-end " >
                                {price}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-12 font-semibold text-secondary-300  " >
                                Tax
                            </td>
                            <td className="text-16 font-semibold text-secondary-500 text-end " >
                                $0
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ApplyOffer />
                <div className="grid grid-cols-[70%_30%] grid-rows-[48px] items-center ">
                    <div className="flex flex-col justify-start">
                        <span
                            className="text-16 font-bold text-secondary-500 ">
                            Total Rental Price
                        </span>
                        <span
                            className="text-16 font-regular text-secondary-300 " >
                            Overll price rental
                        </span>
                    </div>
                    <div className="justify-self-end" >
                        <span
                            className="text-20 font-bold text-secondary-500 pt-[24px]  " >
                            {price}
                        </span>
                    </div>




                </div>



            </div>
        </section>
    );
}