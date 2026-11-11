import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useForm, type SubmitHandler } from "react-hook-form";

import { useTaskContext } from "../../context/TaskContext";
import { useSaveTask } from "../../hooks/useTodos";
import type { Task } from "../../types";

function TaskForm() {
  const {
    showTaskForm,
    setShowTaskForm,
    isEditing,
    setIsEditing,
    selectedTask: { title, description, due_date, status },
    setSelectedTask,
  } = useTaskContext();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Task>();

  const { mutate, isPending } = useSaveTask();
  const onSubmit: SubmitHandler<Task> = async (data) => {
    if (data.title.trim() && data.description.trim())
      return mutate(data, { onSuccess: () => reset() });
  };

  if (isEditing) {
    setValue("title", title);
    setValue("description", description);
    setValue("due_date", due_date);
  }
  const handleShowTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  const handleCancelEditing = () => {
    setIsEditing(!isEditing);
    reset();
    setSelectedTask({
      description: "",
      due_date: "",
      status: "",
      title: "",
    });
  };

  return (
    <>
      {showTaskForm && (
        <div
          className={`p-4 h-full w-full ${isEditing ? "" : "flex-1"} bg-gray-50 rounded-2xl flex flex-col text-gray-900`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[19px] p-2">Task:</h3>
            <FontAwesomeIcon
              icon={faX}
              className="text-[18px] cursor-pointer"
              onClick={() => {
                handleShowTaskForm();
                if (isEditing) {
                  handleCancelEditing();
                }
              }}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
            <div className="mt-2">
              <input
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Title must have at least 3 characters",
                  },
                })}
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-[5px] focus:border-red-300 text-[14px]"
              />
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
            <div className="mt-2">
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 3,
                    message: "Title must have at least 3 characters",
                  },
                })}
                placeholder="Description"
                name="description"
                className="w-full h-28 p-3  border border-gray-300 rounded-[5px] resize-none outline-none text-[14px]"
              ></textarea>
            </div>
            {errors.due_date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.due_date.message}
              </p>
            )}
            <div className="mt-2 flex items-center justify-start text-[13px] mb-5">
              <div className="mr-4 ">
                <label htmlFor="due_date" className="font-bold">
                  Due date:
                </label>
              </div>
              <input
                {...register("due_date", {
                  required: "Due date is required",
                  validate: (value) => {
                    if (value < new Date().toISOString().slice(0, 16))
                      return "Due date must be in future";
                  },
                })}
                type="datetime-local"
                name="due_date"
              />
            </div>
            {isEditing && <div className="mt-2 flex items-center justify-start text-[13px]">
              <div className="mr-4">
                <div className="flex gap-5 mb-5">
                  <label htmlFor="due_date" className="font-bold">
                    Status:
                  </label>
                  <p>{status}</p>
                </div>
              </div>
            </div>}
            <div className="mt-auto flex justify-around text-[13px] font-medium">
              {isEditing ? (
                <button
                  disabled={isPending}
                  className="flex items-center bg-amber-300 hover:bg-amber-200 p-2 font-bold cursor-pointer border rounded-[5px] disabled:bg-amber-200 disabled:cursor-auto"
                >
                  {isPending ? "Loading ..." : "Edit Task"}
                </button>
              ) : (
                <button
                  disabled={isPending}
                  className="flex items-center bg-amber-300 hover:bg-amber-200 p-2 font-bold cursor-pointer border rounded-[5px] disabled:bg-amber-200 disabled:cursor-auto"
                >
                  {isPending ? "Loading ..." : "Save Task"}
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskForm;
