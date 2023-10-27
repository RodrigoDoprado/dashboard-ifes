import { useQuery } from "@tanstack/react-query"
import { getPeriods } from "../../api/PeriodApi"

export function useGetAllPeriod(acronym: string | undefined){
    // console.log(acronym)
    const query = useQuery({
        queryFn: ()=>getPeriods(acronym),
        queryKey: ['period-data',acronym],
        retry: 4
    })
    return{
        ...query,
        periods: query.data?.data
    }
}