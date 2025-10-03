import HomePageHeader from "../../Molucols/HomePageHeader/HomePageHeader"
import PopularSection from "../../Organims/PopularSection/PopularSection"
import NewProduct from "../../Organims/NewProduct/NewProduct"
import OfferProduct from "../../Organims/OfferProduct/OfferProduct"
import ProductPoster from "../../Organims/ProductPoster/ProductPoster"
import GridSection from "../../Organims/GridSection/GridSection"
import BestSellerSection from "../../Organims/BestSellerSection/BestSellerSection"
import Suggestion from "../../Organims/Suggestion/Suggestion"
import PosterSection from "../../Organims/PosterSection/PosterSectio"
import PopularBrand from "../../Organims/PopularBrands/PopularBrands"
function HomePage() {
    return (
        <div className="w-full flex justify-center items-center gap-8 flex-col">
            <HomePageHeader />
            <PopularSection />
            <NewProduct />
            <ProductPoster />
            <OfferProduct />
            <GridSection />
            <BestSellerSection />
            <PosterSection />
            <Suggestion />
            <PopularBrand />
        </div>
    )
}

export default HomePage