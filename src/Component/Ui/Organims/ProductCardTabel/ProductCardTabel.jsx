import { useSelector } from "react-redux"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import { DataCard } from "../../../../core/Services/Query/GetProductCard/api"
import useMonyFormat from "../../../../core/Hooks/useMonyFormat"
import { useDiscountOffer } from "../../../../core/Hooks/useDiscountOffer"
import { Delete } from "../../../../core/Services/Mution/DeleteProduct/api"
import { ProductCount } from "../../../../core/Services/Mution/ProductCount/api"

function ProductCardTabel() {
    const delet = Delete()
    const update = ProductCount();

    const GetData = DataCard();
    if (GetData.isPending) return <p>lodding...</p>;

    const HandelButton = (id) => {
        console.log(id)
        delet.mutate(id)
    }



    const handelPlusButton = async (id) => {
        const find = GetData.data.data.find(items => items.id === id);
        update.mutate({ ...find, Count: ++find.Count });
    }
    const handelMinusButton = (id) => {
        const find = GetData.data.data.find(items => items.id === id);
        update.mutate({ ...find, Count: --find.Count  });
    }
    if (delet.isPending) return <p>Lodding...</p>
    if (update.isError) return <p>dddddddddddddddddd</p>



    return (
        <div className="bg-white w-3/4 rounded-3xl">
            <table className="table-auto w-full" dir="rtl">
                <thead className="border-b border-dashed text-center pb-7">
                    <tr className="pb-4">
                        <td className="py-3 px-10">محصولات</td>
                        <td className="py-3 px-10">تعداد</td>
                        <td className="py-3 px-10">قیمت کل</td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {GetData.data && GetData.data.data.map((item) => (

                        <tr className="border-b-2">
                            <td className="flex justify-start gap-4 items-center">
                                <div className="">
                                    <Img className={'w-[100px]'} src={item.img[0]} />
                                </div>
                                <div className="flex justify-center items-start flex-col gap-3">
                                    <Text>{item.title}</Text>
                                    <div className="flex justify-center items-center gap-1">
                                        <div className="flex justify-center items-center rounded-full w-[20px] h-[20px] bg-blue-700"></div>
                                        <Text>آبی</Text>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="border w-[100px] rounded-md mx-auto flex justify-evenly items-center h-[30px]">
                                    <Button onClick={() => handelMinusButton(item.id)}>-</Button>
                                    <Button>{item.Count ? item.Count : 0}</Button>
                                    <Button onClick={() => handelPlusButton(item.id)}>+</Button>
                                </div>
                            </td>
                            <td>
                                <div className="flex justify-center items-center gap-10">
                                    <div className="flex justify-center items-center flex-col">
                                        {item.Offer ?
                                            <Text className={'text-[1.5vw] text-[#FFB800]'}><span>{item.Price ? useMonyFormat(useDiscountOffer(item.Price, item.Offer)) : useMonyFormat(0)}</span> تومان</Text> :
                                            null}
                                        {item.Offer ?
                                            <Text className={'line-through'}> {useMonyFormat(item.Price)} تومان</Text> :
                                            <Text> {useMonyFormat(item.Price)} تومان</Text>}
                                    </div>
                                    <div>
                                        <Button onClick={() => HandelButton(item.id)}>
                                            <Icon icons={"Delete"} />
                                        </Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductCardTabel