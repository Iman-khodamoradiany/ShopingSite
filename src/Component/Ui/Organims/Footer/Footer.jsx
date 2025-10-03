import HeaderFooter from "../../Molucols/HeaderFooter/HeaderFooter"
import FooterInformation from "../FooterInformation/FooterInformation"

function Footer() {
    return (
        <div className="bg-[#282828] flex justify-center items-center flex-col gap-5">
            <div className="w-[80%] flex justify-center item py-5 items-center  border-b pb-10 border-[#FFFFFF40]">
                <HeaderFooter />
            </div>
            <div className="w-full flex justify-end items-centet">
                <FooterInformation />
            </div>
            <div></div>
        </div>
    )
}

export default Footer