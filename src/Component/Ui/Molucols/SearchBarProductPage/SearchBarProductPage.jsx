import Icon from "../../Atom/Icon/Icon";
import Input from "../../Atom/Input/Input";

function SearchBarProductPage() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center relative w-full bg-[#0000001F] h-[70px] rounded-md">
                <Input placeholder={'جستجو'} className={'w-[100%] left-0 h-[70px] absolute px-20 bg-transparent outline-none text-[1.3vw]'} dir={'rtl'} />
                <div className="absolute right-8">
                    <Icon icons={'Search'} />
                </div>
            </div>
        </div>
    )
}

export default SearchBarProductPage