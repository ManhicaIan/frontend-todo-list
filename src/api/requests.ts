import { type Task } from "../types";
import api from "./axios";
import endpoints from "./endpoints";

export const requests = {
  getAllTasks: async () => {
    const res = await api.get<Task[]>(endpoints.tasks.base);
    return res.data;
  },
  getTaskById: async (id: string) => {
    const res = await api.get<Task>(endpoints.tasks.byId(id));
    return res.data;
  },
  saveTask: async (task: Task) => {
    const res = await api.post<Task>(endpoints.tasks.base, task);
    return res.data;
  },
  updateTask: async (id: string, task: Task) => {
    const res = await api.put<Task>(endpoints.tasks.byId(id), task);
    return res.data;
  },
  completeTask: async (id: string) => {
    const res = await api.post<Task>(endpoints.tasks.complete(id));
    return res.data;
  },
};
