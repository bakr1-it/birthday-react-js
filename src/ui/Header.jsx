import React from 'react'
import Input from '../components/Input'
export default function Header({onChange,message}) {
  return (
    <div className='grid grid-cols-3 gap-2 max-w-xl '> 
        <div >
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'>Day</p>
<Input onChange={onChange}  maxNumber={2} placeholder="DD" name="day"/>
{message.day?.trim()!= "" ? ( <p className='text-xs font-black text-red-600 '> {message.day} </p> ) :"" }

        </div>
        <div>
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'>Month</p>
<Input  maxNumber={2} onChange={onChange} placeholder="MM"  name="month"/>
{message.month?.trim()!= "" ? ( <p className='text-xs font-black text-red-600 '> {message.month} </p> ) :"" }

        </div>
        <div>
            <p className='text-xs uppercase tracking-widest text-white-300 ms-2 mb-1'> Year</p>
<Input  maxNumber={4} placeholder="YYYY" onChange={onChange}  name="year"/>
{message.year?.trim()!= "" ? ( <p className='text-xs font-black text-red-600 '> {message.year} </p> ) :"" }

        </div>
      
    </div>
  )
}
