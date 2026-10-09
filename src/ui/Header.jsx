import React from 'react'
import Input from '../components/Input'
export default function Header({onChange}) {
  return (
    <div className='grid grid-cols-3 gap-2 max-w-xl '> 
        <div >
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'>Day</p>
<Input onChange={onChange}  maxNumber={2}/>

        </div>
        <div>
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'>Month</p>
<Input  maxNumber={2}/>

        </div>
        <div>
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'> Year</p>
<Input  maxNumber={4}/>

        </div>
      
    </div>
  )
}
