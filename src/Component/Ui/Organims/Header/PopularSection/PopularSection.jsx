import Text from "../../../Atom/Text/Test";
import PopularList from "../../../Molucols/PopularList/PopularList";

function PopularSection() {
    return (
        <div className="flex justify-center items-center flex-col my-10 gap-5 w-[85%] mx-auto">
            <div>
                <Text className={'text-[2vw]'}>محصولات محبوب</Text>
            </div>
            <PopularList />
        </div>

    )
}

export default PopularSection