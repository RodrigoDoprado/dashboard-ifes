import { useQuery } from "@tanstack/react-query"
import { getSubjects } from "../../api/SubjectApi"

export function useGetAllSubject(title: string | undefined){
    const query = useQuery({
        queryFn: ()=>getSubjects(title),
        queryKey: ['subject-data'],
        retry: 2
    })
    return{
        ...query,
        subjects: query.data?.data
    }
}