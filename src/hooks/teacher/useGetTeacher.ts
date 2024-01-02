import { useQuery } from '@tanstack/react-query'
import { getTeacher } from '../../api/TeacherApi'

export function useGetTeacher(enroll: string | undefined) {
  const query = useQuery({
    queryFn: () => getTeacher(enroll),
    queryKey: ['teacher-data', enroll],
    retry: 4,
  })
  return {
    ...query,
    teacher: query.data?.data,
  }
}
