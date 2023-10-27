import { useQuery } from "@tanstack/react-query"
import { getTeachers } from "../../api/TeacherApi"

export function useGetAllTeacher(){
    const query = useQuery({
        queryFn: getTeachers,
        queryKey: ['teacher-data'],
        retry: 4
    })
    return{
        ...query,
        teachers: query.data?.data
    }
}