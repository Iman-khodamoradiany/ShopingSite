import { Link } from "react-router-dom";
import Icon from "../../Atom/Icon/Icon";
import { ContactUs } from "../../../../core/Constans/ContactUs";
function ContactFooter() {
    return (
        <div className="flex justify-center items-start gap-5 text-[1.3vw] text-white">
            <div className="flex justify-center items-end gap-4 flex-col ContactLink">
                {ContactUs.map((item) => (
                    <div className="flex justify-center items-center gap-2">
                        <Link>{item.title}</Link>
                        <Icon icons={item.icon} />
                    </div>
                ))}
            </div>
            <div className="pt-3">
                <Icon icons={'logo'} />
            </div>
        </div>
    )
}

export default ContactFooter