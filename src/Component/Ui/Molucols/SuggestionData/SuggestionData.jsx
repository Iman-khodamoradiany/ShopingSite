import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import ProducCard from "../ProductCard/ProductCard"

function SuggestionData() {
    const queryData = GetQueryRequest()
    return (
        <div className="flex justify-center items-center gap-4">
            {queryData.data && queryData.data.data.slice(10, 15).map((item) => (
                <ProducCard item={item} />
            ))}
        </div>
    )
}

export default SuggestionData