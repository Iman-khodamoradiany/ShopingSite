import { Api } from "../../../Config/Api/Api"

export const DeleteProductFunction = async (id) => {
    try {
        console.log(name)
        const res = await Api.delete(`/LoginUser/${id}`)
        return res
    } catch (err) {
        console.log(err)
    }
}