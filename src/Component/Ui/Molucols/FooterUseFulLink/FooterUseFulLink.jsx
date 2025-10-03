import { Link } from "react-router-dom";
import { UseFulLink } from "../../../../core/Constans/UsefulLink";
import './FooterUserFullLink.css'
function FooterUseFullLink() {
    return (
        <div className="flex justify-center items-end flex-col text-[1.3vw] text-white FooterUse gap-3">
            {UseFulLink.map((item) => (
                <div>
                    <Link>{item}</Link>
                </div>
            ))}
        </div>
    )
}

export default FooterUseFullLink