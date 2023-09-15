import { useQuery } from "@tanstack/react-query"
import { getStudents } from "../../api/StudentApi"

export function useGetStudent(){
    const query = useQuery({
        queryFn: getStudents,
        queryKey: ['student-data'],
        retry: 2
    })
    return{
        ...query,
        students: query.data?.data
    }
}