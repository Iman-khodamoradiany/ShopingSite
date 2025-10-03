import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Test";

function AddToCardPage() {
    return (
        <div>
            <Button className={'bg-[#F0C400] rounded-xl px-8 py-1 text-[1.2vw] text-white flex justify-center items-center gap-2'}>
                <Text>افزودن به سبد خرید</Text>
                <Icon icons={'Basket'} />
            </Button>
        </div>

    )
}

export default AddToCardPage