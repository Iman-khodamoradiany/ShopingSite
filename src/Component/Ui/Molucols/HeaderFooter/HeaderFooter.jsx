import { HeaderFooterData } from "../../../../core/Constans/HeaderFooterData"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"

function HeaderFooter() {
    return (
        <div className="flex justify-between items-center w-full text-white px-20" dir="rtl">
            {HeaderFooterData.map((item) => (
                <div key={item.id} className="flex flex-col justify-center items-center gap-2">
                    <div className="w-[100px] h-[100px] flex justify-center items-end">
                        <Img className={'w-3/4'} src={item.Img} />
                    </div>
                    <Text>{item.title}</Text>
                </div>
            ))}
        </div>
    )
}

export default HeaderFooter