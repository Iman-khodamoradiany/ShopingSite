import { PopularBrandData } from "../../../../core/Constans/PopularBrandData"
import Img from "../../Atom/Img/Img"

function PopularBrandItem() {
    return (
        <div className="flex justify-between gap-4 w-full items-center">
            {PopularBrandData.map((item) => (
                <div>
                    <Img src={item} />
                </div>
            ))}
        </div>
    )
}

export default PopularBrandItem