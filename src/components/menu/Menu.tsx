import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faGreaterThan, faListCheck, faCalendarDays, faNoteSticky, faSliders, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  return (
    <div className='p-4 h-full w-[20%] bg-gray-50 rounded-2xl flex flex-col text-gray-900' >
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-[19px] p-2'>Menu</h3>
        <FontAwesomeIcon icon={faBars} className='text-[18px] cursor-pointer' />
      </div>
      <div className='mt-2 relative'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'/>
        <input type="text" placeholder='Search' className='w-full p-1 pl-10 border border-gray-300 rounded-[5px] focus:border-red-300' />
      </div>
      <div className='mt-5 text-[13px] font-medium'>
        <h5 className='p-2 font-bold'>Tasks</h5>
        <div>
          <div className='group flex items-center justify-between hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer'>
            <div className='flex items-center '>
              <div className='mr-4'>
                <FontAwesomeIcon icon={faGreaterThan} />
              </div>
              <p>Upcoming</p>
            </div>
            <p className='w-10 h-5 bg-gray-200 font-bold text-[12px] text-center p-0.5 rounded-[5px] flex justify-center items-center group-hover:bg-white'>12</p>
          </div>
        </div>
        <div className='group flex items-center justify-between hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer'>
          <div className='flex items-center'>
            <div className='mr-4'>
              <FontAwesomeIcon icon={faListCheck} />
            </div>
            <p>Today</p>
          </div>
          <p className='w-10 h-5 bg-gray-200 font-bold text-[12px] text-center p-0.5 rounded-[5px] flex justify-center items-center group-hover:bg-white'>5</p>
        </div>
        <div>
          <div className='flex items-center justify-start hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer'>
            <div className="mr-4">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <p>Calendar</p>
          </div>
        </div>
        <div className='mb-3'>
          <div className='flex items-center justify-start hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer'>
            <div className="mr-4">
              <FontAwesomeIcon icon={faNoteSticky} />
            </div>
            <p>Sticky Wall</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-auto flex flex-col justify-center text-[13px] font-medium">
        <div className="flex items-center hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer">
          <FontAwesomeIcon icon={faSliders} className='mr-4'/>
          <p>Settings</p>
        </div>
        <div className="flex items-center hover:bg-gray-200 p-2 hover:rounded-[5px] hover:font-bold cursor-pointer">
          <FontAwesomeIcon icon={faRightFromBracket} className='mr-4' />
          <p>Log out</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
