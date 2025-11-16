import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteProductFunction } from "../DeleteProductFunction"

export const Delete = () => {
    const Queryclinet = useQueryClient();
    const result = useMutation({
        mutationFn: (id) => DeleteProductFunction(id),
        onSuccess: () => {
            Queryclinet.invalidateQueries('Card')
        }
    })
    return result
}