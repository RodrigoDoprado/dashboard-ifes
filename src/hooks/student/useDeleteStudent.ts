import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteStudent } from "../../api/StudentApi";


export function useDeleteStudent(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteStudent,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}