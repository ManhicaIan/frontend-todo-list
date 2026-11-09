import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useForm, type SubmitHandler } from "react-hook-form";

import { useTaskContext } from "../../context/TaskContext";
interface FormFields {
  id?: string;
  title: string;
  description: string;
  due_date: string;
}

function TaskForm() {
  const { showTaskForm, setShowTaskForm } = useTaskContext();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {

   
  };

  const handleShowTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  return (
    <>
      {showTaskForm && (
        <div className="p-4 h-full w-full flex-1 bg-gray-50 rounded-2xl flex flex-col text-gray-900">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[19px] p-2">Task:</h3>
            <FontAwesomeIcon
              icon={faX}
              className="text-[18px] cursor-pointer"
              onClick={handleShowTaskForm}
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
                // value={formData.title}
                placeholder="Title"
                // onChange={handleInputChange}
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
                // value={formData.description}
                // onChange={handleInputChange}
                className="w-full h-28 p-3  border border-gray-300 rounded-[5px] resize-none outline-none text-[14px]"
              ></textarea>
            </div>
            {errors.due_date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.due_date.message}
              </p>
            )}
            <div className="mt-2 flex items-center justify-start text-[13px]">
              <div className="mr-4">
                <label htmlFor="due_date">Due date:</label>
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
                // value={formData.due_date}
                // onChange={handleInputChange}
              />
            </div>
            <div className='mt-auto flex justify-around text-[13px] font-medium'>
              <button
                disabled={isSubmitting}
                className='flex items-center bg-amber-300 hover:bg-amber-200 p-2 font-bold cursor-pointer border rounded-[5px] disabled:bg-amber-200 disabled:cursor-auto'
              >
                {isSubmitting ? 'Loading ...' : 'Save Task'}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskForm;
