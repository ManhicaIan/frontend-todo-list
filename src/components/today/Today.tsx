import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "../task/TaskCard";
import { useTaskContext } from "../../context/TaskContext";
import { useTasks } from "../../hooks/useTodos";


const Today = () => {
  const {data: tasks} = useTasks();
  const {showTaskForm,setShowTaskForm} = useTaskContext();

  const todayTotalTasks = tasks?.length ?? 0;


  const handleShowTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  return (
    <>
      <div className="w-full p-5 font-medium text-gray-900 flex justify-between">
        <div className="w-full pr-5  overflow-y-scroll">
          <div className="flex items-center text-4xl font-bold">
            <h1 className="text-[3vw]">Today</h1>
            <p className="w-[4vw] h-[3vw] ml-5 text-[2vw] font-bold text-center p-0.5 rounded-[5px] border border-gray-200 flex justify-center items-center">
              {todayTotalTasks}
            </p>
          </div>
          <div
            className="mt-10 p-3 border border-gray-200 rounded-[5px] hover:cursor-pointer hover:bg-gray-100 "
            onClick={handleShowTaskForm}
          >
            <button className="flex items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPlus}
                className="mr-3 hover:cursor-pointer"
              />
              Add New Task
            </button>
          </div>
          <div className="mt-5 text-[13px] font-medium">
            {tasks?.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                due_date={task.due_date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
