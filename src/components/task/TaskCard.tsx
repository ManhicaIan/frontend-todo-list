import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faCalendarXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { Task } from "../../types";
import { useGetTaskById } from "../../hooks/useTodos";
import { useTaskContext } from "../../context/TaskContext";

const TaskCard = ({ id, title, due_date }: Task) => {
  const { setSelectedTask, setIsEditing, setShowTaskForm } = useTaskContext();
  const { data: task } = useGetTaskById(id);

  return (
    <div className="text-[14px]">
      <div className="w-full flex items-center">
        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="mr-5" />
              <p>{title}</p>
            </div>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="cursor-pointer text-[10px] ml-5"
              onClick={() => {
                  setShowTaskForm(true);
                  setIsEditing(true)
                  setSelectedTask(task as Task);
              }}
            />
          </div>

          {due_date && (
            <div className="w-full mt-2 flex items-center">
              <FontAwesomeIcon icon={faCalendarXmark} />
              <p className="ml-5 w-full text-[10px]">{due_date}</p>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-2 mb-2 border-gray-300" />
    </div>
  );
};

export default TaskCard;
