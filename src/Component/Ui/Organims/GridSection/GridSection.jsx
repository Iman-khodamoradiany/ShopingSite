import { GridSectionData } from "../../../../core/Constans/GridSectionData"
import Img from "../../Atom/Img/Img"
import './GridSecion.css'
function GridSection() {
    return (
        <div className="parent w-[80%] h-[800px]">
            {GridSectionData.map((item) => (
                <div className={`div${item.id} bg-gradient-to-t cursor-pointer rounded-md from-[${item.StartColor}] via-[${item.MainColor}] to-[${item.EndColor}] flex justify-center items-center`}>
                    <Img src={item.img} />
                </div>
            ))}
        </div>
    )
}

export default GridSection