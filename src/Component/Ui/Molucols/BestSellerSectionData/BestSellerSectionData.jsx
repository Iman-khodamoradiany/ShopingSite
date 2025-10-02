import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import CardOfferBestSeller from "../CardOfferBestSeller/CardOfferBestSeller"

function BestSellerSectionData() {
    const AllData = GetQueryRequest()

    return (
        <div className="flex justify-center items-center gap-5">
            {AllData.data && AllData.data.data.slice(5, 10).map((item) => (
                <CardOfferBestSeller item={item} />
            ))}
        </div>

    )
}

export default BestSellerSectionData