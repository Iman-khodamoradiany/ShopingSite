import { PopularBrandData } from "../../../../core/Constans/PopularBrandData"
import Img from "../../Atom/Img/Img"

function PopularBrandItem() {
    return (
        <div className="flex justify-between w-full items-center">
            {PopularBrandData.map((item) => (
                <div>
                    <Img src={item} />
                </div>
            ))}
        </div>
    )
}

export default PopularBrandItem