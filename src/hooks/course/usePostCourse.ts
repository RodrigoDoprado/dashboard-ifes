import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCourse } from "../../api/CourseApi";

export function usePostCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createCourse,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['course-data'])
        }
    })

    return mutate;
}