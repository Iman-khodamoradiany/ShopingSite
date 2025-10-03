import ProductSize from "../../Molucols/ProductSize/ProductSize";
import ProductTitle from "../../Molucols/ProductTitle/ProdurctTitle";

function ImagesProducts({ find }) {
    return (
        <div className="flex justify-between h-full items-end gap-4 flex-col w-full">
            <ProductTitle find={find} />
            <ProductSize find={find} />
        </div>

    )
}

export default ImagesProducts