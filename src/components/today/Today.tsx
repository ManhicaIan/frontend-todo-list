import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import TaskCard from '../task/TaskCard'

const Today = () => {
    return (
        <>
            <div className='w-[50%] p-5 font-medium text-gray-900'>
                <div className='flex items-center text-4xl font-bold'>
                    <h1 className='text-[3vw]'>Today</h1>
                    <p className='w-[4vw] h-[3vw] ml-5 text-[2vw] font-bold text-center p-0.5 rounded-[5px] border border-gray-200 flex justify-center items-center'>5</p>
                </div>

                <div className='mt-10 p-3 border border-gray-200 rounded-[5px]'>
                    <button className='flex items-center hover:cursor-pointer'><FontAwesomeIcon icon={faPlus} className='mr-3 '/><p>Add New Task</p></button>
                </div>

                <div className="mt-5 text-[13px] font-medium">
                    <TaskCard />
                </div>
            </div>

        </>
    )
}

export default Today
