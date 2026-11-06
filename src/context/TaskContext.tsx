import { createContext, useContext, useState, type ReactNode } from "react";

interface TaskContextType {
  todayTotalTasks: number;
  setTodayTotalTasks: (value: number) => void;
  showTaskForm: boolean;
  setShowTaskForm: (value: boolean) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskContextProvider({ children }: { children: ReactNode }) {
  const [todayTotalTasks, setTodayTotalTasks] = useState<number>(0);
  const [showTaskForm, setShowTaskForm] = useState<boolean>(true);

  return (
    <TaskContext.Provider
      value={{
        todayTotalTasks,
        setTodayTotalTasks,
        showTaskForm,
        setShowTaskForm,
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
