import { BellIcon } from 'lucide-react'
import React from 'react'

const NoFriends = (props) => {
  return (
    <div className='w-[100%] card bg-base-200 hover:shadow-md transition-shadow  p-4 flex m-3 items-center justify-center flex-col gap-2'>
       {
        props.recommended &&  <>
        
         <h1 className='font-semibold text-sm lg:text-md'>No Recommendations Available</h1>
        <p className='text-sm lg:text-md text-center '>Check back later for new language partners!</p>
        </> 
        
       }

       {props.recommended &&  <>
         <h1 className='font-semibold text-sm lg:text-md'>No Friends Yet</h1>
        <p className='text-sm lg:text-md text-center'>Connect with languages partners below to start practicing together!</p>
        </>}
       
       {
        props.NoFriends && <>
         <h1 className='font-semibold text-sm lg:text-md '>No Friend Requests Pending</h1>
        <p className='text-sm lg:text-md text-center'> When you receive friend requests or messages, they'll appear here.</p>
        </>
       }

       {
        !props.NoFriends && <>
        <BellIcon className='badge badge-ghost' />
         <h1 className='font-semibold text-sm lg:text-md '>No Notifications Found</h1>
        <p className='text-sm lg:text-md text-center'> When you receive friend requests or messages, they'll appear here.</p>
        </>
       }
    </div>
  )
}

export default NoFriends