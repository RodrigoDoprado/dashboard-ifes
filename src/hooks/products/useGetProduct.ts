import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../api/ProductApi"

export function useGetProduct(){
    const query = useQuery({
        queryFn: getProducts,
        queryKey: ['product-data'],
        retry: 2
    })
    return{
        ...query,
        products: query.data?.data
    }
}