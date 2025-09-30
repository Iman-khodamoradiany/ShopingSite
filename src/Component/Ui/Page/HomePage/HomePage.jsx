import { PopularProducts } from "../../../../core/Constans/PopularProducts"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Test"
import HomePageHeader from "../../Molucols/HomePageHeader/HomePageHeader"
import PopularList from "../../Molucols/PopularList/PopularList"
import PopularSection from "../../Organims/Header/PopularSection/PopularSection"

function HomePage() {
    return (
        <div className="w-full flex justify-center items-center gap-10">
            <HomePageHeader />
            <PopularSection />
        </div>
    )
}

export default HomePage