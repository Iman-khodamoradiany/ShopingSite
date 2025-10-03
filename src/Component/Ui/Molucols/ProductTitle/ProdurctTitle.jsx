import useMonyFormat from "../../../../core/Hooks/useMonyFormat"
import Button from "../../Atom/Button/Button"
import Text from "../../Atom/Text/Test"

function ProductTitle({ find }) {
    return (
        <div className="flex justify-between h-full items-end gap-4 flex-col w-full">
            <div>
                <Text className={'text-[2.5vw]'}>{find.Description}</Text>
            </div>
            <div className="text-right" dir="rtl">
                <Text className={'text-[3vw] text-[#000000B2]'}><span className="text-black">{useMonyFormat(find.Price)}</span> تومان</Text>
            </div>
            <div className="w-full flex justify-center items-end flex-col gap-5 text-[1.5vw]">
                <Text>رنگ کفش: آبی مشکی</Text>
                <div className="flex justify-center items-center gap-5">
                    {find.Colors.map((item) => (
                        <Button className={'w-[30px] h-[30px] flex rounded-full overflow-hidden'}>
                            <div className="w-1/2 h-full" style={{ backgroundColor: item }}></div>
                            <div className="w-1/2 h-full" style={{ backgroundColor: 'black' }} y></div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductTitle