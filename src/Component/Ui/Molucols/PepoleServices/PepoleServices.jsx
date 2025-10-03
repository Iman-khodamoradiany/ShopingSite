import { Link } from "react-router-dom";
import { OurSercivce } from "../../../../core/Constans/OurSecrvice";
import './PeopleSercives.css'
function PeopleSercives() {
    return (
        <div className="text-[1.3vw] text-white Peopleservices flex justifu-center items-end flex-col gap-3">
            {OurSercivce.map((item) => (
                <div>
                    <Link>{item.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default PeopleSercives