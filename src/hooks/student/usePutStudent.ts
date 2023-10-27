import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateStudent } from "../../api/StudentApi";


export function usePutStudent(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateStudent,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}