
import { useQuery } from '@tanstack/react-query'
import { requests } from '../api/requests'

export const todoKeys = {
    all: ['todos'] as const,
    list: () => [...todoKeys.all, 'list'] as const
}

export function useTasks(){
    return useQuery({
        queryKey: todoKeys.list(),
        queryFn: requests.getAllTasks
    })
}