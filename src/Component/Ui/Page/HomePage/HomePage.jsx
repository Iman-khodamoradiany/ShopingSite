import HomePageHeader from "../../Molucols/HomePageHeader/HomePageHeader"
import PopularSection from "../../Organims/Header/PopularSection/PopularSection"
import NewProductTitle from "../../Molucols/NewProductTitle/NewProductTitle"
import NewProductsList from "../../Molucols/NewProductsList/NewProductsList"
import NewProduct from "../../Organims/NewProduct/NewProduct"
import OfferProduct from "../../Organims/OfferProduct/OfferProduct"
import ProductPoster from "../../Organims/ProductPoster/ProductPoster"
import GridSection from "../../Organims/GridSection/GridSection"
function HomePage() {
    return (
        <div className="w-full flex justify-center items-center gap-8 flex-col">
            <HomePageHeader />
            <PopularSection />
            <NewProduct />
            <ProductPoster />
            <OfferProduct />
            <GridSection />
        </div>
    )
}

export default HomePage