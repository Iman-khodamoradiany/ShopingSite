import Button from "../../Atom/Button/Button";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Test";

function ProductPosterTow() {
    return (
        <div className="w-1/2 h-[250px] rounded-3xl bg-[url(/Background/GreenBackground.png)] flex justify-between px-3 items-center">
            <div>
                <Img className={'full'} src={'/Background/Travel.png'} />
            </div>
            <div className="flex justify-center items-end px-3 flex-col gap-2 mb-2">
                <Text className={'text-[1.5vw] text-white'}>کوهنوردی اسان با بهترین چادر ها</Text>
                <Button className={'bg-[#66666685] text-white rounded-2xl px-5 py-1 text-[1vw]'}>مشاهده</Button>
            </div>
        </div>
    )
}

export default ProductPosterTow