import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSubject } from '../../api/SubjectApi'

export function usePutSubject() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: updateSubject,
    retry: 4,
    onSuccess: () => {
      queryClient.invalidateQueries(['subject-data'])
    },
  })

  return mutate
}
