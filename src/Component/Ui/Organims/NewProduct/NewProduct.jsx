import NewProductsList from "../../Molucols/NewProductsList/NewProductsList";
import NewProductTitle from "../../Molucols/NewProductTitle/NewProductTitle";

function NewProduct() {
    return (
        <div className="flex justify-center items-center flex-col w-[80%] my-10 gap-5">
            <NewProductTitle />
            <NewProductsList />
        </div>
    )
}

export default NewProduct