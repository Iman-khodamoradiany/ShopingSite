import { Link } from "react-router-dom"
import Text from "../../Atom/Text/Test"
import CardOfferBestSeller from "../../Molucols/CardOfferBestSeller/CardOfferBestSeller"
import GetQueryRequest from "../../../../core/Services/Query/GetAllProduct/api"
import { useEffect, useState } from "react";
import BestSellerSectionTitle from "../../Molucols/BestSellerSectionTitle/BestSellerSectionTitle";
import BestSellerSectionData from "../../Molucols/BestSellerSectionData/BestSellerSectionData";

function BestSellerSection() {
    const AllData = GetQueryRequest()
    return (
        <div className="w-[80%] my-10 flex justify-center items-center flex-col gap-4">
            <BestSellerSectionTitle />
            <BestSellerSectionData /> 
        </div>
    )
}

export default BestSellerSection