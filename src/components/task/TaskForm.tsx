import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

interface TaskFormProps {
    addTask: (data: object) => Promise<any>;
    setTask: React.Dispatch<React.SetStateAction<FormData[]>>;
    closeTaskForm: Function;
}

function TaskForm({ addTask, setTask, closeTaskForm }: TaskFormProps) {

    interface FormData {
        id?: string;
        title: string;
        description: string;
        due_date: string;
    }



    const [formData, setformData] = useState<FormData>({
        title: "",
        description: "",
        due_date: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setformData({
            ...formData,
            [name]: value
        });
    }

    const handleAddTask = async (event: React.SubmitEvent) => {
        event.preventDefault();
        setErrors({});

        try {
            const newTask = await addTask(formData);

            if (newTask) {
                setTask((prevTasks) => [...prevTasks, newTask]);
                setformData({
                    title: "",
                    description: "",
                    due_date: ""
                });

                setErrors({});
            }

        } catch (error) {
            if (error) {
                setErrors(error as Record<string, string>);
            }
        }


    }

    return (
        <>
            <div className='p-4 h-full w-full bg-gray-50 rounded-2xl flex flex-col text-gray-900' >
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold text-[19px] p-2'>Task:</h3>
                    <FontAwesomeIcon icon={faX} className='text-[18px] cursor-pointer' onClick={closeTaskForm} />
                </div>
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                    </p>
                )}
                <div className='mt-2'>
                    <input
                        type="text"
                        name='title'
                        value={formData.title}
                        placeholder='Title'
                        onChange={handleInputChange}
                        className='w-full p-2 border border-gray-300 rounded-[5px] focus:border-red-300 text-[14px]' />
                </div>
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                    </p>
                )}
                <div className='mt-2'>
                    <textarea
                        placeholder='Description'
                        name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                        className='w-full h-28 p-3  border border-gray-300 rounded-[5px] resize-none outline-none text-[14px]'
                    ></textarea>
                </div>
                {errors.due_date && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.due_date}
                    </p>
                )}
                <div className='mt-2 flex items-center justify-start text-[13px]'>
                    <div className="mr-4">
                        <label htmlFor="due_date">Due date:</label>
                    </div>
                    <input
                        type="datetime-local"
                        name="due_date"
                        value={formData.due_date}
                        onChange={handleInputChange} />
                </div>
                <div className="mt-auto flex justify-around text-[13px] font-medium">
                    <button className="flex items-center bg-amber-300 hover:bg-amber-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer border rounded-[5px]" onClick={handleAddTask}>Save Task</button>
                </div>
            </div>
        </>
    )
}

export default TaskForm
