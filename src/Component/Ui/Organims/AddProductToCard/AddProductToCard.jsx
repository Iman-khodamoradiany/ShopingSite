import AddToCardPage from "../../Molucols/AddToCardPage/AddToCardPage"
import CountProduct from "../../Molucols/CountProduct/CountProduct"

function AddProductToCard() {
    return (
        <div className="flex justify-center items-center gap-5">
            <AddToCardPage />
            <CountProduct />
        </div>
    )
}

export default AddProductToCard