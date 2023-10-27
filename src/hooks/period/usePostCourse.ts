import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPeriod } from "../../api/PeriodApi";


export function usePostPeriod(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createPeriod,
        retry: 4,
        onSuccess: () => {
            queryClient.invalidateQueries(['period-data'])
        }
    })

    return mutate;
}