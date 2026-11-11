import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { requests } from "../api/requests";
import { type Task } from "../types";

export const taskKeys = {
  all: ["tasks"] as const,
  list: () => [...taskKeys.all, "list"] as const,
  detail: (id: string) => [...taskKeys.all, "detail", id] as const,
};

export function useTasks() {
  return useQuery({
    queryKey: taskKeys.list(),
    queryFn: requests.getAllTasks,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: true,
  });
}

export function useSaveTask() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: requests.saveTask,
    onSuccess: () => qc.invalidateQueries({ queryKey: taskKeys.all }),
  });
}

export function useGetTaskById(id: string | undefined) {
  const qc = useQueryClient();
  return useQuery({
    queryKey: taskKeys.detail(id ?? ""),
    queryFn: () => requests.getTaskById(id!),
    enabled: !!id,
    initialData: () =>
      qc.getQueryData<Task[]>(taskKeys.list())?.find((task) => task.id === id),
    initialDataUpdatedAt: () =>
      qc.getQueryState(taskKeys.list())?.dataUpdatedAt,
  });
}
export const useTodayTotalTasks = () => {
  const { data: tasks } = useTasks();
  return tasks?.length ?? 0;
};