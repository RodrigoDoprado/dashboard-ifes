import { useQuery } from "@tanstack/react-query"
import { getSubjects } from "../../api/SubjectApi"

export function useGetAllSubject(){
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