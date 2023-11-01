import { useQuery } from "@tanstack/react-query"
import { getCourse } from "../../api/CourseApi"

export function useGetCourse(enroll: string | undefined){
    const query = useQuery({
        queryFn: ()=>getCourse(enroll),
        queryKey: ['course-data',enroll],
        retry: 2
    })
    return{
        ...query,
        course: query.data?.data
    }
}