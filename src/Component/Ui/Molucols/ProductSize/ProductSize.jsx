import Button from "../../Atom/Button/Button"
import Text from "../../Atom/Text/Test"

function ProductSize({ find }) {
    return (
        <div className="flex justify-center items-end gap-2 flex-col">
            <div>
                <Text className={'text-[1.2vw]'}>سایز کفش: 40</Text>
            </div>
            <div className="flex justify-center items-center gap-4">
                {find.sizestring.map((item) => (
                    <Button className={'border w-[40px] h-[40px] text-[1vw] rounded-md'}>{item}</Button>
                ))}
            </div>
        </div>

    )
}

export default ProductSize