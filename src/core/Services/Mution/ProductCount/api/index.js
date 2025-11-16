import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateProductCountFunction } from "../ProductCount"
import { CardProductKey } from "../../../Query/GetProductCard/CardProductKey"

export const ProductCount = () => {
    const Queryclinet = useQueryClient()
    const result = useMutation({
        mutationKey: () => CardProductKey(),
        mutationFn: async (item) => {
            // console.log(item)
            return await UpdateProductCountFunction(item)
        },  
        onSuccess: () => {
            Queryclinet.invalidateQueries(['Card'])
        }
    })
    return result
}