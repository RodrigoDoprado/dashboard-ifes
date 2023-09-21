import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTeacher} from "../../api/TeacherApi";


export function useDeleteTeacher(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteTeacher,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['teacher-data'])
        }
    })

    return mutate;
}