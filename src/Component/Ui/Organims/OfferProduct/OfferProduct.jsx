import { Link } from "react-router-dom"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Test"

function OfferProduct() {
    return (
        <div className="w-[80%] flex justify-center items-center flex-col bg-[#F0C400] rounded-3xl">
            <div>
                <Link>بیشتر</Link>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <Icon icons={'OfferIcon'} />
                    <Text>تخفیفات ویژه</Text>
                    <Link>مشاهده بیشتر</Link>
                </div>
            </div>
        </div>
    )
}

export default OfferProduct