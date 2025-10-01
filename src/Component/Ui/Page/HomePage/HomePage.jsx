import HomePageHeader from "../../Molucols/HomePageHeader/HomePageHeader"
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