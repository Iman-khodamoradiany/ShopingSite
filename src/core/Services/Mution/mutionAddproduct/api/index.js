import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AddProductFunction } from "../mutionAddProductFunction"

export const AddProduct = () => {
    const querycilnet = useQueryClient()
    const Result = useMutation({
        mutationFn: (data) => AddProductFunction(data),
        onSuccess: () => {
            querycilnet.invalidateQueries(['Card'])
        }

    })
    return Result
}   