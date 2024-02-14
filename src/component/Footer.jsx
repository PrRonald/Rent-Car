import { MorentName } from "./MorentName";


export const Footer = () => {
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
                <div className="grid grid-cols-2" >
                    <div>
                        <h2 className="font-semibold text-sm text-[#1A202C] " >About</h2>
                        <h1 className="text-[#90A3BF] font-sans " >How it works</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Featured</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Partnership</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Bussiness Relation</h1>
                    </div>
                    <div>
                        <h2 className="font-semibold text-sm text-[#1A202C] ">Social</h2>
                        <h1 className="text-[#90A3BF] font-sans " >Discord</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Instagram</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Twitter</h1>
                        <h1 className="text-[#90A3BF] font-sans " >Facebook</h1>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold text-sm text-[#1A202C] " >Community</h2>
                    <h1 className="text-[#90A3BF] font-sans "  >Events</h1>
                    <h1 className="text-[#90A3BF] font-sans "  >Blog</h1>
                    <h1 className="text-[#90A3BF] font-sans "  >Podcast</h1>
                    <h1 className="text-[#90A3BF] font-sans "  >Invite a friend</h1>
                </div>
                <div>
                    <div className="grid grid-cols-2 py-3"  >
                        <h4 className="text-[12px] " >Privacy & Policy</h4>
                        <h4 className="text-[12px] " >Terms & Condition</h4>
                    </div>

                    <h4 className="text-[12px]  " >2022 MORENT. All rights reserved</h4>
                </div>
            </div>
        </section>
    );
}