import { Link } from "react-router-dom";
import { MorentName } from "./MorentName";


export const Footer = () => {

    const infs = [
        { id: 1, title: "About", subTitle: ["How it works", "Featured", "Partnership", "Bussiness Relation"] },
        { id: 2, title: "Social", subTitle: ["Discord", "Instagram", "Twitter", "Facebook"] },
        { id: 3, title: "Community", subTitle: ["Events", "Blog", "Podcast", "Invite a friend"] }]

    return (
        <section className="w-full flex flex-row justify-center " >
            <div className=" w-[87.2%] grid grid-rows-[100px_140px_140px_140px] gap-2 ">
                <div className="w-full h-[10px] " >
                    <MorentName />
                    <p className="text-[#90A3BF] text-sm font-sans " >
                        Our vision is to provide convenience
                        and help increase ypur sales business
                    </p>
                </div>
                <div className="flex flex-row justify-between " >
                    {infs.map((inf) => (
                        <div
                          className="w-[142px] h-[192px] "
                          key={inf.id}>
                            <h1>{inf.title}</h1>
                            {inf.subTitle.map((subTitle, ind) => (
                                <Link
                                    key={ind}
                                    to="/"
                                    className="text-[#90A3BF] flex flex-col  " >
                                    {subTitle}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div>
                        <div className="grid grid-cols-2 py-3"  >
                            <h4 className="text-[12px] " >Privacy & Policy</h4>
                            <h4 className="text-[12px] " >Terms & Condition</h4>
                        </div>

                        <h4 className="text-[12px]  " >2022 MORENT. All rights reserved</h4>
                    </div>
                </div>
                </div>
        </section>
    );
}