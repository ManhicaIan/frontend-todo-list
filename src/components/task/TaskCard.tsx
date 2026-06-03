import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faCalendarXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface TaskCardProps{
    title: string,
    due_date: Date
}

const TaskCard = ({ title, due_date}: TaskCardProps) => {
    return (
        <div className='text-[14px]'>
            <div className="w-full flex items-center">
                
                <div className='w-full'>
                    <div className="w-full flex justify-between items-center">
                        <div className='flex items-center'>
                            <input type="checkbox" className='mr-5' />
                            <p>{title}</p>
                        </div>
                        <FontAwesomeIcon icon={faGreaterThan} className='cursor-pointer text-[10px] ml-5' />
                    </div>
                    
                    {due_date && <div className="w-full mt-2 flex items-center">
                        <FontAwesomeIcon icon={faCalendarXmark} />
                        <p className='ml-5 w-full text-[10px]'>{due_date}</p>
                    </div>}
                </div>
            </div>
            <hr className='mt-2 mb-2 border-gray-300'/>
        </div>
    )
}

export default TaskCard
