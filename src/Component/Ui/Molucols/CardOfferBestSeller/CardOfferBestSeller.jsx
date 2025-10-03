import { Link } from "react-router-dom"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import useMonyFormat from "../../../../core/Hooks/useMonyFormat"
import { useDiscountOffer } from "../../../../core/Hooks/useDiscountOffer"

function CardOfferBestSeller({ item }) {
    return (
        <Link to={`/Products/${item.id}`} className="border relative bg-white flex justify-between items-center flex-col pb-5 h-full overflow-hidden rounded-xl shadow-xl">
            <div className="w-full">
                <Img src={item.img ? item.img : '/public/NotFount/NotFoundImg.jpg'} />
            </div>
            <div className="w-full px-3 text-right flex justify-end items-center text-[1vw]">
                <Text className={'text-gray-600'}>{item.Description}</Text>
            </div>
            <div className="w-full flex justify-between items-end px-4" dir="rtl">
                <Button>
                    <Icon icons={'BuyToCard'} />
                </Button>
                {item.Offer ?
                    < div className="flex justify-start items-end flex-col">
                        <Text className={'text-[1.5vw] text-[#FFB800]'}><span>{item.Price ? useMonyFormat(useDiscountOffer(item.Price, item.Offer)) : useMonyFormat(0)}</span> تومان</Text>
                        <Text className={'line-through text-[1vw]'}><span>{item.Price ? useMonyFormat(item.Price) : useMonyFormat(0)}</span> تومان</Text>
                    </div>
                    : <div className="flex justify-center items-center gap-1">

                        <Text className={'text-[1.3vw]'}> {useMonyFormat(item.Price)}تومان</Text>
                    </div>
                }
            </div>
            {item.Offer && (
                <div className={'absolute top-2 -left-8 w-[120px] text-center bg-[#F0C400] -rotate-45'}>
                    <Text>{item.Offer}%</Text>
                </div>
            )}
        </Link >
    )
}
export default CardOfferBestSeller