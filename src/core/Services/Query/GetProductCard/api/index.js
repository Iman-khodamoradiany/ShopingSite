import { useQuery } from "@tanstack/react-query";
import { CardProductKey } from "../CardProductKey";
import { CardProductQuery } from "../CardProductQuery";

export const DataCard = () => {
    const Result = useQuery({
        queryKey: CardProductKey(),
        queryFn: () => CardProductQuery()
    });
    return Result
}