import { useQuery } from '@tanstack/react-query';
import { getStudents } from '../../api/StudentApi';

export function useGetAllStudent() {
  const query = useQuery({
    queryFn: getStudents,
    queryKey: ['student-data'],
    retry: 4,
  });
  return {
    ...query,
    students: query.data?.data,
  };
}
