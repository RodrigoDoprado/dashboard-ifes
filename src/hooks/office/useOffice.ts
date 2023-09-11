import { useQuery } from "@tanstack/react-query"
import { getOfficeByName } from "../../api/OfficeApi"

export function useOffice(){
    const query = useQuery({
        queryFn: getOfficeByName,
        queryKey: ['office-data'],
        retry: 2
    })
    return{
        ...query,
        offices: query.data?.data
    }
}