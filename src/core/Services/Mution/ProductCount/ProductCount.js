import { Api } from "../../../Config/Api/Api";

export const UpdateProductCountFunction = async (currentCount) => {
    try {
        console.log(currentCount)
        const res = await Api.put(`/LoginUser/${currentCount.id}`, currentCount);
        return res;
    } catch (err) {
        console.log(err);
    }
}
