import Text from "../../Atom/Text/Test"
import ProductCardTable from "../../Organims/ProductCardTabel/ProductCardTabel"

function CardProduct() {
    return (
        <div className="w-[80%] mx-auto flex justify-center items-center py-20 bg-[rgb(235, 229, 229)] flex-col gap-10">
            <div className="w-full relative border-t-2 border-black">
                <Text className={'absolute right-0 text-[2vw] w-[200px] text-center -top-7 bg-gray-200 z-20 text-[#F0C400]'}>سبد خرید شما</Text>
            </div>
            <ProductCardTable />
        </div>
    )
}

export default CardProduct