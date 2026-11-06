import { createContext, useContext, useState, type ReactNode } from "react";

interface TaskContextType {
  todayTotalTasks: number;
  setTodayTotalTasks: (value: number) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskContextProvider({ children }: { children: ReactNode }) {
  const [todayTotalTasks, setTodayTotalTasks] = useState<number>(0);

  return (
    <TaskContext.Provider value={{ todayTotalTasks, setTodayTotalTasks }}>
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
