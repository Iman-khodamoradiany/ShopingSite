import { useState } from "react"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import CateGoryFilterProductPage from "../../Molucols/CateGoryFilterProductPage/CateGoryFilterProductPage"
import ProductPagination from "../../Molucols/ProductPageination/ProductPagination"
import SearchBarProductPage from "../../Molucols/SearchBarProductPage/SearchBarProductPage"
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