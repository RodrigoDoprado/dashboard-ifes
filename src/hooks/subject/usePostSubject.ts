import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createSubject } from "../../api/SubjectApi";

export function usePostSubject(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createSubject,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['subject-data'])
        }
    })

    return mutate;
}