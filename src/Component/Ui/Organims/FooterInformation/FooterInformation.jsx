import { Link } from "react-router-dom"
import { ContactUs } from "../../../../core/Constans/ContactUs"
import { OurSercivce } from "../../../../core/Constans/OurSecrvice"
import { UseFulLink } from "../../../../core/Constans/UsefulLink"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Test"
import ContactFooter from "../../Molucols/ContactFooter/ConatctFooter"
import PeopleSercives from "../../Molucols/PepoleServices/PepoleServices"
import FooterUseFullLink from "../../Molucols/FooterUseFulLink/FooterUseFulLink"

function FooterInformation() {
    return (
        <div className="flex justify-between w-[80%] items-start px-5 py-5">
            <FooterUseFullLink />
            <PeopleSercives />
            <ContactFooter />
        </div>
    )
}

export default FooterInformation