import { Link } from "react-router-dom";
import Text from "../../Atom/Text/Test";
import SuggestionTitle from "../../Molucols/SuggestionTitle/SuggestionTitle";
import SuggestionData from "../../Molucols/SuggestionData/SuggestionData";

function Suggestion() {
    return (
        <div className="w-[80%] flex justify-center items-center flex-col gap-4">
            <SuggestionTitle />
            <SuggestionData />
        </div>
    )
}

export default Suggestion