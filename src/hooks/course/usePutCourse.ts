import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCourse } from "../../api/CourseApi";


export function usePutCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateCourse,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['course-data'])
        }
    })

    return mutate;
}