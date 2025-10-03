import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import CardOfferBestSeller from "../CardOfferBestSeller/CardOfferBestSeller"

function ProductPageData({ DataEdite }) {
    return (
        <div className="grid grid-cols-5 grid-rows-[400px] gap-4 mt-5">
            {DataEdite && DataEdite.map((item) => (
                <CardOfferBestSeller item={item} />
            ))}
        </div>

    )
}

export default ProductPageData