import { Link } from "react-router-dom"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import useMonyFormat from "../../../../core/Hooks/useMonyFormat"

function NewProductsList() {
    const qury = GetQueryRequest()

    return (
        <div className="flex justify-between items-center gap-4 w-full">
            {qury.data && qury.data.slice(1, 6).map((item) => (
                <Link className="border flex justify-between items-center flex-col pb-5 h-[380px] overflow-hidden rounded-xl shadow-xl">
                    <div className="w-full">
                        <Img src={item.img} />
                    </div>
                    <div className="w-full px-3 text-right flex justify-end items-center text-[1vw]">
                        <Text className={'text-gray-600'}>{item.Description}</Text>
                    </div>
                    <div className="w-full flex justify-between items-center px-4" dir="rtl">
                        <Button>
                            <Icon icons={'BuyToCard'} />
                        </Button>
                        <div className="flex justify-center items-center gap-1">
                            <Text className={'text-[1.3vw]'}>{useMonyFormat(item.Price)}</Text>
                            <Text className={"mt-1 text-[1vw] text-gray-500"}>تومان</Text>
                        </div>
                    </div>
                </Link>

            ))}
        </div>

    )
}

export default NewProductsList