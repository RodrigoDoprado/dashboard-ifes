import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteSubject } from '../../api/SubjectApi'

export function useDeleteSubject() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: deleteSubject,
    retry: 4,
    onSuccess: () => {
      queryClient.invalidateQueries(['subject-data'])
    },
  })

  return mutate
}
