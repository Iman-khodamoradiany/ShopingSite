import { GridSectionData } from "../../../../core/Constans/GridSectionData"
import Img from "../../Atom/Img/Img"
import Text from "../../Atom/Text/Test"
import GridSectionStyle from "../../Molucols/GridSectionStyle/GridSectionStyle"
function GridSection() {
    return (
        <div className="w-[80%] h-[650px] flex justify-center items-center flex-col gap-5 my-10">
            <div className="text-center">
                <Text className={'text-[2.5vw] font-black'}>!با اینا سفرت به راهه</Text>
            </div>
            <GridSectionStyle />
        </div>
    )
}

export default GridSection