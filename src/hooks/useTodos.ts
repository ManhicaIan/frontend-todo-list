import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { requests } from "../api/requests";

export const todoKeys = {
  all: ["todos"] as const,
  list: () => [...todoKeys.all, "list"] as const,
};

export function useTasks() {
  return useQuery({
    queryKey: todoKeys.list(),
    queryFn: requests.getAllTasks,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true
  });
}

export function useSaveTask() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: requests.saveTask,
    onSuccess: () => qc.invalidateQueries({ queryKey: todoKeys.all }),
  });
}
