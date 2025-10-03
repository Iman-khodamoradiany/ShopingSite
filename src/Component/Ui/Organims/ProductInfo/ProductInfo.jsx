import { useParams } from "react-router-dom";
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api";
import { useEffect, useState } from "react";
import ImgSection from "../ImgSection/ImgSection";
import ImagesProducts from "../ImagesProduct/ImagesProducts";
import AddProductToCard from "../AddProductToCard/AddProductToCard";

function ProductInfo() {
    const { id } = useParams()

    const AllProduct = GetQueryRequest()
    const [find, setFind] = useState(null);
    const [SelectPhoto, setSelectPhoto] = useState();

    useEffect(() => {
        if (AllProduct.data) {
            const product = AllProduct.data.data.find(item => item.id == id);
            setFind(product);
        }
    }, [AllProduct.data, id]);

    console.log(find);

    if (AllProduct.isPending) return <p>{AllProduct.isPending}</p>;

    return (
        <div>
            {AllProduct.data && find && (
                <div className="w-full flex justify-center items-start p-3 h-[500px]">
                    <div className="w-1/2 flex justify-between h-full items-end flex-col gap-5">
                        <ImagesProducts find={find} />
                        <AddProductToCard />
                    </div>
                    <ImgSection find={find} />
                </div>
            )
            }
        </div >
    )
}

export default ProductInfo