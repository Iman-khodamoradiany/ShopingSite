import Icon from "../../Atom/Icon/Icon";
import Input from "../../Atom/Input/Input";

function HomePageHeader() {
    return (
        <div className="w-full bg-[url(/Background/Rectangle-112.png)] h-[90vh] bg-no-repeat bg-cover bg-center relative">
            <div className="w-3/4 h-[100px] absolute -bottom-[80px] overflow-hidden rounded-md -1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <div className="relative bg-black z-20 w-full h-full">
                    <div className="absolute right-8 h-full flex items-center z-30 ">
                        <Icon icons={'Search'} />
                    </div>
                    <Input className="absolute w-full h-full bg-white px-20 outline-none text-[1.3vw]" dir='rtl' placeholder={'محصول مورد نظر خود را جستجو کنید...'} />
                </div>
            </div>
        </div>

    )
}

export default HomePageHeader