import { useState } from "react"
import { CateGoryFilter } from "../../../../core/Constans/CateGoryFilter"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Test"
import CateGoryFilterProductPage from "../../Molucols/CateGoryFilterProductPage/CateGoryFilterProductPage"
import ProductPagination from "../../Molucols/ProductPageination/ProductPagination"
import SearchBarProductPage from "../../Molucols/SearchBarProductPage/SearchBarProductPage"
import ProducCard from "../../Molucols/ProductCard/ProductCard"
import CardOfferBestSeller from "../../Molucols/CardOfferBestSeller/CardOfferBestSeller"
import ProductPageData from "../../Molucols/ProdactPageData/ProdactPageData"

function ProductsPage() {
    const [DataEdite, setDataEdit] = useState()
    const productdata = GetQueryRequest()
    if (productdata.isPending) return <p>lodding ....</p>
    return (
        <div className="w-[80%] flex justify-center items-center flex-col mx-auto py-10">
            <SearchBarProductPage />
            <CateGoryFilterProductPage />
            <ProductPageData DataEdite={DataEdite} />
            <ProductPagination data={productdata.data.data} itemPerPage={10} setDataEdit={setDataEdit} />
        </div>
    )
}

export default ProductsPage