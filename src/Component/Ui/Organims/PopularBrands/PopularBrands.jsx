import Text from "../../Atom/Text/Test"
import PopularBrandItem from "../../Molucols/PopularBrandItem/PopularBrandItem"

function PopularBrand() {
    return (
        <div className="w-[80%] flex justify-center items-center flex-col my-10">
            <div>
                <Text className={'text-[2vw]'}>محبوب ترین برند ها</Text>
            </div>
            <PopularBrandItem />
        </div>
    )
}

export default PopularBrand