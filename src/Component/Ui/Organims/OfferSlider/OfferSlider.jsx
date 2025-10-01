import { useRef } from "react";
import OfferProductButton from "../../Molucols/OfferProductButton/OfferProductButton";
import OfferProductSlider from "../../Molucols/OfferProductSlider/OfferProductSlider";

function OfferSlider() {
    const swiperRef = useRef();
    return (
        <div className="w-9/12 mx-auto py-2 flex justify-center items-center relative">
            <OfferProductSlider swiperRef={swiperRef} />
            <OfferProductButton swiperRef={swiperRef} />
        </div>
    )
}

export default OfferSlider