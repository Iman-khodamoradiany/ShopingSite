import { Api } from "../../../Config/Api/Api"

export const AddProductFunction = async (data) => {
    try {
        const result = await Api.post('/LoginUser', data);
        return result;
    } catch (err) {
        console.error('خطا در ارسال درخواست:', err);
        throw err;
    }
}
