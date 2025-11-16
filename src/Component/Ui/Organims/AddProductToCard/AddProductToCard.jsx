import AddToCardPage from "../../Molucols/AddToCardPage/AddToCardPage"
import CountProduct from "../../Molucols/CountProduct/CountProduct"

function AddProductToCard({item}) {
    return (
        <div className="flex justify-center items-center gap-5">
            <AddToCardPage item={item}/>
            <CountProduct />
        </div>
    )
}

export default AddProductToCard