import { useQuery } from "@tanstack/react-query"
import { getTeachers } from "../../api/TeacherApi"

export function useGetTeacher(){
    const query = useQuery({
        queryFn: getTeachers,
        queryKey: ['teacher-data'],
        retry: 2
    })
    return{
        ...query,
        teachers: query.data?.data
    }
}