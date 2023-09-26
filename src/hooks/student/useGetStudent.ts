import { useQuery } from "@tanstack/react-query"
import { getStudent } from "../../api/StudentApi"

export function useGetStudent(enroll: string | undefined){
    const query = useQuery({
        queryFn: ()=>getStudent(enroll),
        queryKey: ['student-data',enroll],
        retry: 2
    })
    return{
        ...query,
        student: query.data?.data
    }
}