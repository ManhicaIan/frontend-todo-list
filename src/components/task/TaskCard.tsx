import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faCalendarXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const TaskCard = () => {
    return (
        <div className='text-[14px]'>
            <div className="w-full flex items-center">
                <input type="checkbox" className='-mt-5 mr-5' />
                <div className='w-full'>
                    <div className="w-full flex justify-between items-center">
                        <p>Title</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='cursor-pointer text-[10px] ' />
                    </div>
                    
                    <div className="w-full mt-2 flex items-center">
                        <FontAwesomeIcon icon={faCalendarXmark} />
                        <p className='ml-2 text-[10px]'>22-06-2026</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TaskCard
