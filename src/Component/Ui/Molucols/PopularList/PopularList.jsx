import { PopularProducts } from "../../../../core/Constans/PopularProducts";
import Img from "../../Atom/Img/Img";
import Text from "../../Atom/Text/Test";

function PopularList() {
    return (
        <div className="flex justify-evenly w-full items-center">
            {PopularProducts.map((item) => (
                <div className="flex justify-center items-center flex-col cursor-pointer">
                    <img src="" alt="" />
                    <div className="w-[150px] h-[150px] flex relative justify-center items-center rounded-full overflow-hidden bg-center bg-cover">
                        <Img
                            className={`w-full h-full absolute top-0 filter blur-2xl`}
                            src={item.img} />
                        <Img className={'w-[100px] h-[100px] absolute'} src={item.img} />
                    </div>
                    <div>
                        <Text>{item.title}</Text>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default PopularList