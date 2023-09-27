import { useQuery } from "@tanstack/react-query"
import { getSubjects } from "../../api/SubjectApi"

export function useGetSubject(){
    const query = useQuery({
        queryFn: getSubjects,
        queryKey: ['subject-data'],
        retry: 2
    })
    return{
        ...query,
        subjects: query.data?.data
    }
}