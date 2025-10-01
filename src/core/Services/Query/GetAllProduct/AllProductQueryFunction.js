import { Api } from "../../../Config/Api/Api"

const AllProductQueryFunction = async () => {
    try {
        const response = await Api.get('/Product')
        return response
    }
    catch (err) {
        console.log(err)
    }
}

export default AllProductQueryFunction