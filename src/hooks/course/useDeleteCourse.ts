import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCourse } from '../../api/CourseApi';

export function useDeleteCourse() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteCourse,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['course-data']);
    },
  });

  return mutate;
}
