import Button from "../../Atom/Button/Button"
import Img from "../../Atom/Img/Img"

function ImgSection({ find }) {
    return (
        <div className="w-1/2 flex h-3/4 justify-between items-center flex-col gap-3">
            <div className="w-5/6 h-full">
                <Img className={'w-full h-full rounded-xl shadow-xl'} src={find.img[0]} />
            </div>
            <div className="flex justify-center h-1/4 items-center gap-5 w-5/6 px-3">
                {find.img.map((item) => (
                    <Button className={'w-full h-full'}>
                        <Img className={'w-full rounded-md h-full'} src={item} />
                    </Button>
                ))}
            </div>
        </div>


    )
}

export default ImgSection