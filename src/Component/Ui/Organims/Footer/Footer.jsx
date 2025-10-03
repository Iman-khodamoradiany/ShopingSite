import FFooter from "../../Molucols/FFooter/FFooter"
import HeaderFooter from "../../Molucols/HeaderFooter/HeaderFooter"
import FooterInformation from "../FooterInformation/FooterInformation"
import InfoAcoSport from "../InfoAcoSport/InfoAcoSport"

function Footer() {
    return (
        <div className="bg-[#282828] flex justify-center items-center flex-col gap-5">
            <div className="w-[80%] flex justify-center item py-5 items-center  border-b pb-10 border-[#FFFFFF40]">
                <HeaderFooter />
            </div>
            <div className="w-full flex justify-end items-centet">
                <FooterInformation />
            </div>
            <div className="w-full flex justify-center items-center">
                <InfoAcoSport />
            </div>
            <div className="w-full ">
                <FFooter />
            </div>
        </div>
    )
}

export default Footer