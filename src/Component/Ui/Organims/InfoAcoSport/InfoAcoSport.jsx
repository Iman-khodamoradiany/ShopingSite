import { MedalData } from "../../../../core/Constans/MedalData";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Test";

function InfoAcoSport() {
    return (
        <div className="w-full flex justify-center items-center flex-col relative border-t border-[#FFFFFF40] p-8 mt-5">
            <div className="absolute -top-5 right-0 text-[1.5vw] font-bold bg-[#282828] text-right px-3 text-white">
                <Text>درباره <span className="text-[#F0C400]">آکو اسپورت</span></Text>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-3/6 flex justify-start items-center gap-2">
                    {MedalData.map((item) => (
                        <div>
                            <Img src={item} />
                        </div>
                    ))}
                </div>
                <div className="w-3/6 text-right text-[1.5vw] text-white">
                    <Text>فروشگاه آکو اسپرت افتخار عرضه حضوری و مجازی محصولات متنوع کوهنوردی طبیعت گردی و لوازم آفرود با قیمت بسیار مناسب کیفیت مطلوب و فراهم سازی بستری مطمئن جهت خرید آسان و با رضایت و اطمینان خاطر کامل مشتریان عزیز این مجموعه را در کارنامه خود دارد</Text>
                </div>
            </div>
            
        </div>
    )
}

export default InfoAcoSport