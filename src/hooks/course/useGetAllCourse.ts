import { useQuery } from "@tanstack/react-query"
import { getCourses } from "../../api/CourseApi"

export function useGetAllCourse(){
    const query = useQuery({
        queryFn: getCourses,
        queryKey: ['course-data'],
        retry: 2
    })
    return{
        ...query,
        courses: query.data?.data
    }
}