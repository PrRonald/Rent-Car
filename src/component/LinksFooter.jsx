import { Link } from "react-router-dom";

export const LinksFooter = () => {

    const infs = [
        { id: 1, title: "About", Links: ["How it works", "Featured", "Partnership", "Bussiness Relation"] },
        { id: 2, title: "Social", Links: ["Discord", "Instagram", "Twitter", "Facebook"] },
        { id: 3, title: "Community", Links: ["Events", "Blog", "Podcast", "Invite a friend"] }
    ]

    return (
        <section className=" grid grid-cols-[50%_50%] " >
            {infs.map((inf) => (
                <div
                    className="w-[142px] h-[192px]  "
                    key={inf.id}>
                    <h1 className="w-[120px] text-20 font-semibold text-secondary-500 pb-3 " >
                        {inf.title}
                    </h1>
                    {inf.Links.map((link, ind) => (
                        <Link
                            key={ind}
                            to="/"
                            className="font-plus font-medium text-[16px] text-secondary-300 leading-5 flex flex-col pb-3 " >
                            {link}
                        </Link>
                    ))}
                </div>
            ))}
        </section>
    );
}