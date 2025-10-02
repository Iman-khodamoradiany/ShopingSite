import { GridSectionData } from "../../../../core/Constans/GridSectionData";
import Img from "../../Atom/Img/Img";
import './GridSectinStyle.css'
function GridSectionStyle() {
    return (
        <div className="parent w-full h-[650px]">
            {GridSectionData.map((item) => (
                <div className={`div${item.id} bg-gradient-to-t cursor-pointer rounded-md flex justify-center items-center`}
                    style={{ background: `linear-gradient(to top, ${item.StartColor} , ${item.EndColor})` }}>
                    <Img src={item.img} />
                    {console.log(item.StartColor)}
                </div>
            ))}
        </div>

    )
}

export default GridSectionStyle