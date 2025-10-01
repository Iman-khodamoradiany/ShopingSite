import Text from "../../Atom/Text/Test";

function NewProductTitle() {
    return (
        <div className="flex justify-between items-center w-full px-3">
            <div>
                <Text className={'text-[1.3vw] text-gray-700'}>بیشتر</Text>
            </div>
            <div>
                <Text className={'text-[2vw] font-bold'}>جدیدترین محصولات </Text>
            </div>

        </div>
    )
}

export default NewProductTitle