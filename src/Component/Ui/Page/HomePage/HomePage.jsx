import { Link } from "react-router-dom"
import { PopularProducts } from "../../../../core/Constans/PopularProducts"
import useMonyFormat from "../../../../core/Hooks/useMonyFormat"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProsducts"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Img from "../../Atom/Img/Img"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Test"
import HomePageHeader from "../../Molucols/HomePageHeader/HomePageHeader"
import PopularList from "../../Molucols/PopularList/PopularList"
import PopularSection from "../../Organims/Header/PopularSection/PopularSection"
import NewProductTitle from "../../Molucols/NewProductTitle/NewProductTitle"
import NewProductsList from "../../Molucols/NewProductsList/NewProductsList"
function HomePage() {
    return (
        <div className="w-full flex justify-center items-center gap-8 flex-col">
            <HomePageHeader />
            <PopularSection />
            <div className="flex justify-center items-center flex-col w-[80%] my-20 gap-5">
                <NewProductTitle />
                <NewProductsList />
            </div>

        </div>
    )
}

export default HomePage