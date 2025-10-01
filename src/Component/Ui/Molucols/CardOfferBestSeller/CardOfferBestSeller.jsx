function CardOfferBestSeller() {
    return (
        <Link className="border relative bg-white flex justify-between items-center flex-col pb-5 h-[350px] overflow-hidden rounded-xl shadow-xl">
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
                        <Text className={'text-[1.5vw] text-[#FFB800]'}><span>{useMonyFormat(useDiscountOffer(item.Price, item.Offer))}</span> تومان</Text>
                        <Text className={'line-through text-[1vw]'}><span>{useMonyFormat(item.Price)}</span> تومان</Text>
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