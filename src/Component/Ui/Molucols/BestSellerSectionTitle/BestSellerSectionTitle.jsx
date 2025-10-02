import { Link } from "react-router-dom";
import Text from "../../Atom/Text/Test";

function BestSellerSectionTitle() {
    return (
        <div className="w-full flex justify-between items-center">
            <div>
                <Link className="text-[1.2vw] text-gray-600">بیشتر</Link>
            </div>
            <div>
                <Text className="text-[2vw]">پرفروش ترین محصولات</Text>
            </div>
        </div>
    )
}

export default BestSellerSectionTitle