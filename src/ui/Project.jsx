
import Header from './Header'
import Divide from './Divide'
import Result from './Result'
import { useEffect, useState } from 'react'
import calclateForAge from '../utils/age'
export default function Project() {
  const [message,setMessage] = useState({
    day:"",
    month:"",
    year:""
  })
  const [brithday , setBrithday]=useState({
    year:"",
    month:"",
    day:""
  })
  const [result,setResult]= useState({});
function getResult (){
  const {day,month,year} = brithday;

const errors = {
    day: !day?.trim() ? "please write your day" : "",
    month: !month?.trim() ? "please write your month" : "",
    year: !year?.trim() ? "please write your year" : "",
  };

  setMessage(errors);
if(!errors.day.trim() &&  !errors.month.trim() && !errors.year.trim()){
  const data =  calclateForAge(brithday);
  if(data.status==422){
    setMessage(data.data);
  }else{
setResult(data.data);
    
  }
}

  }


const handelSetBrithday=(key,value)=>{

  setBrithday((priv)=>({
    ...priv , 
    [key]:value,
  })
)}
  return (
    <div className='max-w-3xl shadow-2xl w-full bg-white  flex flex-col gap-8 sm:gap-4 p-8 rounded-3xl   rounded-br-[100px] '>
      <Header onChange={handelSetBrithday} message={message}/>
      <Divide onSend= {getResult}/>
      <div className='px-4 gap-2 flex flex-col'>
        <Result text={"year"} num={result.year}/>
        <Result text={"month"} num={result.month}/>
        <Result text={"day"} num={result.day} />
      </div>
    </div>
  )
}
