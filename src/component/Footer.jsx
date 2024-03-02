import { MorentName } from "./MorentName";
import { LinksFooter } from "./LinksFooter";


export const Footer = () => {
    return (
        <section className="grid grid-rows-[auto_auto_auto] grid-cols-[100%] gap-y-[48px]">

            <div className="max-w-[216px] ">
                <MorentName />
                <p className=" font-medium font-plus text-[12px]
                 leading-[24px] text-secondary-300 " >
                    Our vision is to provide convenience
                    and help increase ypur sales business
                </p>
            </div>

            <div className="w-full ">
                <LinksFooter />
            </div>

            <div className="w-full grid grid-cols-[50%_50%]
             grid-rows-[16px_16px] grid-row-[auto_auto] gap-y-4 ">
                <div className="w-full text-12 font-semibold text-secondary-500">
                    <h1>
                        Pravacy & Policy
                    </h1>
                </div>
                <div className="w-full text-12 font-semibold text-secondary-500 ">
                    <h1>
                        Terms & Conditions
                    </h1>
                </div>
                <div className="w-full text-12 font-semibold text-secondary-500 col-span-2">
                    <p>
                        © 2022 Morent. All rights reserved.
                    </p>
                </div>
            </div>
        </section>

    );
}