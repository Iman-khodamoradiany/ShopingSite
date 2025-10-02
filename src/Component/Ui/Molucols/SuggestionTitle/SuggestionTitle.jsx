import { Link } from "react-router-dom";
import Text from "../../Atom/Text/Test";

function SuggestionTitle() {
    return (
        <div className="w-full flex justify-between items-center px-3">
            <div>
                <Link className="text-[1.2vw] text-gray-500">بیشتر</Link>
            </div>
            <div>
                <Text className={"text-[2vw]"}>پیشنهاد ما</Text>
            </div>
        </div>

    )
}

export default SuggestionTitle