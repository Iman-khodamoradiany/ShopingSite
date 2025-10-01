import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";

function OfferProductButton({swiperRef}) {
    return (
        <div className='flex justify-between z-20 w-[110%] absolute'>
            <Button className={' top-1/2 z-30 '} onClick={() => swiperRef.current?.slideNext()}>
                <Icon icons={'RightArrow'} />
            </Button>
            <Button className={' top-1/2 z-30 '} onClick={() => swiperRef.current?.slidePrev()}>
                <Icon icons={'LeftArrow'} />
            </Button>
        </div>
    )
}

export default OfferProductButton