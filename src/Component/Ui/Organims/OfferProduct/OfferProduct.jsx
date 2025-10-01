import { Link } from "react-router-dom"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Test"
import OfferProductSlider from "../../Molucols/OfferProductSlider/OfferProductSlider"
import Button from "../../Atom/Button/Button"
import { useRef } from "react"
import OfferProductButton from "../../Molucols/OfferProductButton/OfferProductButton"
import OfferSlider from "../OfferSlider/OfferSlider"
import OfferProductTitle from "../../Molucols/OfferProductTitle/OfferProductTitle"

function OfferProduct() {

    return (
        <div className="w-[80%] h-[420px] gap-2 flex justify-center items-center flex-col z-10 bg-[#F0C400] rounded-3xl">
            <div className="w-[92%] text-[1.4vw] text-gray-800 flex justify-start items-center">
                <Link>بیشتر</Link>
            </div>
            <div className="w-full flex justify-end itmes-center">

                <OfferSlider />
                <OfferProductTitle />
            </div>
        </div>
    )
}

export default OfferProduct