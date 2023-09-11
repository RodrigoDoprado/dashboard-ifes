import { useQuery } from "@tanstack/react-query"
import { getProductByName } from "../../api/ProductApi"

export function useProduct(){
    const query = useQuery({
        queryFn: getProductByName,
        queryKey: ['product-data'],
        retry: 2
    })
    return{
        ...query,
        products: query.data?.data
    }
}