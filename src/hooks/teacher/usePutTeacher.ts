import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTeacher } from "../../api/TeacherApi";


export function usePutTeacher(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: updateTeacher,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['teacher-data'])
        }
    })

    return mutate;
}