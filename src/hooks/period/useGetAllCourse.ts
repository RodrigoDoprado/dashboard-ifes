import { useQuery } from "@tanstack/react-query"
import { getPeriods } from "../../api/PeriodApi"

export function useGetAllPeriod(acronym: string | undefined){
    const query = useQuery({
        queryFn: ()=>getPeriods(acronym),
        queryKey: ['period-data'],
        retry: 2
    })
    return{
        ...query,
        periods: query.data?.data
    }
}