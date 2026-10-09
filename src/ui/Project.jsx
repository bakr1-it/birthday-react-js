
import Header from './Header'
import Divide from './Divide'
import Result from './Result'
import { useEffect, useState } from 'react'

export default function Project() {
  const [brithday , setBrithday]=useState({
    year:"",
    month:"",
    day:""
  })
  useEffect(()=>{
console.log(brithday);
  },[brithday])
const handelSetBrithday=(key,value)=>{

  setBrithday((priv)=>({
    ...priv , 
    [key]:value,
  })
)}
  return (
    <div className='max-w-3xl w-full bg-white  flex flex-col gap-8 sm:gap-4 p-8 rounded-3xl rounded-br-[100px] '>
      <Header onChange={handelSetBrithday}/>
      <Divide />
      <div className='px-4 gap-2 flex flex-col'>
        <Result text={"year"}/>
        <Result text={"month"}/>
        <Result text={"day"} />
      </div>
    </div>
  )
}
