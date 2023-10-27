import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCourse } from "../../api/CourseApi";


export function usePutCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateCourse,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['course-data'])
        }
    })

    return mutate;
}