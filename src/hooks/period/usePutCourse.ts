import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updatePeriod } from '../../api/PeriodApi'

export function usePutPeriod() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: updatePeriod,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['period-data'])
    },
  })

  return mutate
}
