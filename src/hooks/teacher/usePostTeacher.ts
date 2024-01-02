import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTeacher } from '../../api/TeacherApi'

export function usePostTeacher() {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createTeacher,
    retry: 4,
    onSuccess: () => {
      queryClient.invalidateQueries(['teacher-data'])
    },
  })

  return mutate
}
