import { useQuery } from "@tanstack/react-query";
import { Api } from "../../../Config/Api/Api";
import { AllProductQueryKey } from "./AllProductQueryKey";
import AllProductQueryFunction from "../AllProductQueryFunction";

function GetQueryRequest() {
    const result = useQuery({
        queryKey: AllProductQueryKey(),
        queryFn: AllProductQueryFunction()
    })
    return result
}

export default GetQueryRequest