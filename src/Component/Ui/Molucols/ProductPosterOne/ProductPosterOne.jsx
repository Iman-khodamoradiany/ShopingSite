import Button from "../../Atom/Button/Button";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Test";

function ProductPosterOne() {
    return (
        <div className="w-1/2 h-[200px] rounded-3xl bg-[url(/Background/BlueBackground.png)] flex justify-between items-center">
            <div>
                <Img className={'w-11/12'} src={'/Background/Dambel.png'} />
            </div>
            <div className="flex justify-center items-end flex-col px-3 gap-1">
                <Text className={'text-white text-[1.5vw]'}>!ورزش اسان با بهترین دمبل ها</Text>
                <Text className={'text-[1.5vw] text-white'}>با محصولات بولین</Text>
                <Button className={'bg-[#66666685] text-white rounded-2xl px-5 py-1 text-[1vw]'}>مشاهده</Button>
            </div>
        </div>

    )
}

export default ProductPosterOne