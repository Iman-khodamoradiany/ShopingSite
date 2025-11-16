import { Api } from "../../../Config/Api/Api"

export const CardProductQuery = async () => {
    try {
        const result = Api.get('/LoginUser')
        return result
    } catch (err) {
        console.log(err)
    }
}