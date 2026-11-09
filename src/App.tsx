import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Today from "./components/today/Today";
import TaskForm from "./components/task/TaskForm";

function App() {
  return (
    <>
      <div className="p-5 h-full bg-white font-['Poppins'] flex justify-between">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Menu /> <Today /> <TaskForm />
              </>
            }
          />
          <Route
            path="*"
            element={<h1 className="font-black text-3xl">404 - Not Found</h1>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
