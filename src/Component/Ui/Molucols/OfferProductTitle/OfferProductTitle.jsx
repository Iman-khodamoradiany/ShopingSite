import { Link } from "react-router-dom";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Test";

function OfferProductTitle() {
    return (
        <div className="w-1/6 h-full flex justify-center items-end gap-2 px-4 flex-col">
            <Icon icons={'OfferIcon'} />
            <Text className={'text-[3.5vw] text-right'}>تخفیفات ویژه</Text>
            <Link className="text-[1.2vw] text-gray-600">مشاهده همه</Link>
        </div>
    )
}

export default OfferProductTitle