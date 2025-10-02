import { PosterSectionData } from "../../../../core/Constans/PosterSectionData";
import Button from "../../Atom/Button/Button";
import Text from "../../Atom/Text/Test";

function PosterSectionItem() {
    return (
        <div className="w-full grid grid-cols-[1fr_1fr_1fr] grid-rows-[250px] gap-3">
            {PosterSectionData.map((item) => (
                <div className=" rounded-2xl bg-center bg-cover w-full h-full text-[#FFFFFF] flex justify-center items-end px-3 flex-col"
                    style={{ backgroundImage: `url(${item.img})` }}>
                    <div className="flex justify-center items-end flex-col mb-5 gap-1">
                        <Text className={'text-[1.3vw] font-bold'}>{item.title}</Text>
                        <Button className={'bg-[#666666B2] rounded-2xl px-4  text-[1.1vw]'}>مشاهده</Button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default PosterSectionItem