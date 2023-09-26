import { useQuery } from "@tanstack/react-query"
import { getStudent } from "../../api/StudentApi"

export function useGetStudent(studentId: string | undefined){
    const query = useQuery({
        queryFn: getStudent,
        queryKey: ['student-data'],
        retry: 2
    })
    return{
        ...query,
        student: query.data?.data
    }
}