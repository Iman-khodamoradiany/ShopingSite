import Button from "../../Atom/Button/Button";

function CountProduct() {
    return (
        <div className="flex justify-between rounded-lg items-center border h-[50px] bg-white">
            <Button className={'text-[1.5vw] border-r flex justify-center items-center w-[30px] h-full'}>-</Button>
            <Button className={'w-[40px]'}>0</Button>
            <Button className={'text-[1.5vw] border-l flex justify-center items-center w-[30px] h-full'}>+</Button>
        </div>
    )
}

export default CountProduct