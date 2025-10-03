import { CateGoryFilter } from "../../../../core/Constans/CateGoryFilter"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Test"
import CateGoryFilterProductPage from "../../Molucols/CateGoryFilterProductPage/CateGoryFilterProductPage"
import SearchBarProductPage from "../../Molucols/SearchBarProductPage/SearchBarProductPage"

function ProductsPage() {
    return (
        <div className="w-[80%] flex justify-center items-center flex-col mx-auto py-10">
            <SearchBarProductPage />
            <CateGoryFilterProductPage />
            <div></div>
            <div></div>
        </div>
    )
}

export default ProductsPage