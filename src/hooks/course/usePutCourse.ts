import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateStudent } from "../../api/StudentApi";


export function usePutCourse(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateStudent,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['student-data'])
        }
    })

    return mutate;
}