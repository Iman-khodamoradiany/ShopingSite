import { Link } from "react-router-dom"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import useMonyFormat from "../../../../core/Hooks/useMonyFormat"
import ProducCard from "../ProductCard/ProductCard"

function NewProductsList() {
    const qury = GetQueryRequest()
    if (qury.isPending) return <p>loding ....</p>
    return (
        <div className="flex justify-between items-center gap-4 w-full">
            {qury.data && qury.data.data.slice(1, 6).map((item) => (
                <ProducCard item={item} />
            ))}
        </div>

    )
}

export default NewProductsList