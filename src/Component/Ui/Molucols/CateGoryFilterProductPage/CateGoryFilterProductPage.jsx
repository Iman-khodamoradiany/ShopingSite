import { useState } from "react";
import { CateGoryFilter } from "../../../../core/Constans/CateGoryFilter";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Test";

function CateGoryFilterProductPage() {
    const [active, setActive] = useState()

    const HandelButton = (index) => {
        setActive(index)
    }

    return (
        <div className="w-full flex justify-end items-center border-b pb-3 border-[#00000066] gap-3 mt-10">
            <div className="flex justify-center items-center gap-6" dir="rtl">
                {CateGoryFilter.map((item, index) => (
                    <Button
                        onClick={() => HandelButton(index)}
                        onBlur={() => setActive('')}
                        className={`font-[vazirmatn] ${active === index ? 'text-[#F0C400]' : ''}`}>{item.title}</Button>
                ))}
            </div>
            <div className="flex justify-center items-center gap-5 text-[1.1vw]">
                <Text className={'font-[vazirmatn]'}>:مرتب سازی</Text>
                <Icon icons={'statistics'} />
            </div>
        </div>
    )
}

export default CateGoryFilterProductPage