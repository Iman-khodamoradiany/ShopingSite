import { useEffect, useState } from "react";
import { AddProduct } from "../../../../core/Services/Mution/mutionAddproduct/api";
import { DataCard } from "../../../../core/Services/Query/GetProductCard/api";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Test";
import { data } from "react-router-dom";

function AddToCardPage({ item }) {
    const SendData = AddProduct()
    const [Find, setFind] = useState()
    const Data = DataCard()

    useEffect(() => {
        if (Data.data) {
            Data.data.data.map((items) => {
                console.log(items.id)
            })
            console.log(item.id)
            const find = Data.data.data.find(test => test.title == item.title)
            console.log(find)
            setFind(find)
        }
    }, [Data.data, item.id, Data.data])


    const HandeButton = (item) => {
        if (Find) {
            alert('شما این محصول را اضافه کرده اید')
        } else {
            SendData.mutate({ ...item, Count: 0 })
            alert('adsf')
        }
    }

    if (SendData.isPending) return <p>send...</p>
    return (
        <div>
            <Button
                onClick={() => HandeButton(item)}
                className={'bg-[#F0C400] rounded-xl px-8 py-1 text-[1.2vw] text-white flex justify-center items-center gap-2'}>
                <Text>افزودن به سبد خرید</Text>
                <Icon icons={'Basket'} />
            </Button>
        </div>

    )
}

export default AddToCardPage