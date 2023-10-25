import { useQuery } from "@tanstack/react-query"
import { getSubjects } from "../../api/SubjectApi"

export function useGetAllSubject(id: string | undefined){
    const query = useQuery({
        queryFn: ()=>getSubjects(id),
        queryKey: ['subject-data',id],
        retry: 2
    })
    return{
        ...query,
        subjects: query.data?.data
    }
}