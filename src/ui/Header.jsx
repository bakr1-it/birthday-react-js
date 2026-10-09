import React from 'react'
import Input from '../components/Input'
export default function Header() {
  return (
    <div className='flex gap-4'> 
        <div >
            <p className='ms-2'>Day</p>
<Input  maxNumber={2}/>

        </div>
        <div>
            <p className='ms-2'>Month</p>
<Input  maxNumber={2}/>

        </div>
        <div>
            <p className='ms-2'> Year</p>
<Input  maxNumber={4}/>

        </div>
      
    </div>
  )
}
