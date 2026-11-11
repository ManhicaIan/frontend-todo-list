import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task } from "../types";

interface TaskContextType {
  showTaskForm: boolean;
  setShowTaskForm: (value: boolean) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  selectedTask: Task;
  setSelectedTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskContextProvider({ children }: { children: ReactNode }) {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Task>({
    description: "",
    due_date: "",
    status: "",
    title: "",
  });

  return (
    <TaskContext.Provider
      value={{
        showTaskForm,
        setShowTaskForm,
        isEditing,
        setIsEditing,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === null)
    throw new Error("useTaskContext must be used with a TaskContextProvider");
  return context;
}
