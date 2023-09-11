import { useQuery } from "@tanstack/react-query"
import { getCategoryByName } from "../../api/CategoryApi"

export function useCategory(){
    const query = useQuery({
        queryFn: getCategoryByName,
        queryKey: ['category-data'],
        retry: 2
    })
    return{
        ...query,
        categorys: query.data?.data
    }
}