import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createStudent } from "../../api/StudentApi";

export function usePostStudent(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createStudent,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}