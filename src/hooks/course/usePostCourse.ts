import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCourse } from "../../api/CourseApi";

export function usePostCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createCourse,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}