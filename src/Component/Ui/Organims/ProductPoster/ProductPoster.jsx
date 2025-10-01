import Button from "../../Atom/Button/Button"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import ProductPosterOne from "../../Molucols/ProductPosterOne/ProductPosterOne"
import ProductPosterTow from "../../Molucols/ProductPosterTow/ProductPosterTow"

function ProductPoster() {
    return (
        <div className="flex justify-between items-center gap-2 w-[80%] my-10">
            <ProductPosterOne />
            <ProductPosterTow />
        </div>
    )
}

export default ProductPoster