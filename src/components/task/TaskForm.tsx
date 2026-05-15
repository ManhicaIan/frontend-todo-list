import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

function Task() {
    return (
        <>
            <div className='p-4 h-full w-[30%] bg-gray-50 rounded-2xl flex flex-col text-gray-900' >
                <div className='flex justify-between items-center'>
                    <h3 className='font-bold text-[19px] p-2'>Task:</h3>
                    <FontAwesomeIcon icon={faX} className='text-[18px] cursor-pointer' />
                </div>
                <div className='mt-2'>
                    <input type="text" placeholder='Title' className='w-full p-2 border border-gray-300 rounded-[5px] focus:border-red-300 text-[14px]' />
                </div>
                <div className='mt-2'>
                    <textarea placeholder='Description' className='w-full h-28 p-3  border border-gray-300 rounded-[5px] resize-none outline-none text-[14px]'
                    ></textarea>
                </div>
                <div className='mt-2 flex items-center justify-start text-[13px]'>
                    <div className="mr-4">
                        <label htmlFor="">Due date:</label>
                    </div>
                    <input type="datetime-local" name="" id="" />
                </div>
                <div className="mt-auto flex justify-around text-[13px] font-medium">
                    <button className="flex items-center bg-amber-300 hover:bg-amber-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer border rounded-[5px]">Save Task</button>
                </div>
            </div>
        </>
    )
}

export default Task
