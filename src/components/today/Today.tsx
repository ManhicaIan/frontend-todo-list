    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faPlus } from '@fortawesome/free-solid-svg-icons'
    import React, { useEffect, useState } from 'react'
    import TaskCard from '../task/TaskCard'
    import { addTask, fetchData } from '../../api/requests'
    import TaskForm from '../task/TaskForm'

    let length : number;
    
    const Today = () => {
        
        const [task, setTask] = useState<FormData[]>([])
        const [active, setActive] = useState(false)
        
        length = task.length
        useEffect(() => {
            fetchData(setTask);
        }, [])

        const handleOpenTaskForm = () => { 
            setActive(true);         
        }
        const handleCloseTaskForm = () => {
            setActive(false);
        }
        return (
            <>
                <div className='w-[80%] p-5 font-medium text-gray-900 flex justify-between'>
                    <div className='w-full pr-5  overflow-y-scroll'>
                        <div className='flex items-center text-4xl font-bold'>
                            <h1 className='text-[3vw]'>Today</h1>
                            <p className='w-[4vw] h-[3vw] ml-5 text-[2vw] font-bold text-center p-0.5 rounded-[5px] border border-gray-200 flex justify-center items-center'>{task.length}</p>
                        </div>
                        <div className='mt-10 p-3 border border-gray-200 rounded-[5px] hover:cursor-pointer hover:bg-gray-100 ' onClick={handleOpenTaskForm}>
                            <button className='flex items-center hover:cursor-pointer'><FontAwesomeIcon icon={faPlus} className='mr-3 hover:cursor-pointer' />Add New Task</button>
                        </div>
                        <div className="mt-5 text-[13px] font-medium">
                            {task.map( task => <TaskCard key={task.id} title={task.title} due_date={task.due_date} />)}
                        </div>
                    </div>
                    <div className={active ? "block" : "hidden"}>
                        <TaskForm addTask={addTask} setTask={setTask} closeTaskForm={handleCloseTaskForm}/>
                    </div>
                </div>

            </>
        )
    }

    export function getLength() {
        return length;
    }
    export default Today
