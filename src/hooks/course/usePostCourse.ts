import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createStudent } from "../../api/StudentApi";

export function usePostCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createStudent,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}