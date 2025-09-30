import { Link } from "react-router-dom";
import Icon from "../../Atom/Icon/Icon";
import Button from "../../Atom/Button/Button";
import Text from "../../Atom/Text/Test";
import NavBarLink from "../../Molucols/NavBarLink/NavBarLink";
import './Header.css'

function Header() {
    return (
        <nav className="w-full flex justify-between items-center px-20 py-2" dir="rtl">
            <div className="w-1/2 flex justify-start items-cetner gap-8">
                <div>
                    <Icon icons={'logo'} />
                </div>
                <NavBarLink />
            </div>
            <div className="flex justify-center items-center gap-5">
                <div>
                    <Button className={'flex justify-start items-center gap-1 border-2 border-[#F0C400] rounded-md p-1 pl-5'}>
                        <Icon icons={'login'} />
                        <Text className={'pb-1'}>ورود / ثبت نام</Text>
                    </Button>
                </div>
                <div className="CardLength">
                    <Icon icons={'basket'} />
                    <div className="w-[15px] h-[15px] bg-[#F0C400] absolute -top-1 rounded-full flex justify-center items-center text-[0.7vw]">
                        <Text className={'h-full mb-1 font-bold'}>0</Text>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header