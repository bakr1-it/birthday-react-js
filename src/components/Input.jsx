
export default function Input({maxNumber,onChange}) {
  return (

        <input 
        type="tel"
        onChange={(e)=>onChange("year",e.target.value)}
        className="border font-black text-xl border-white-300/50 p-2 max-w-40 rounded-xl focus:outline-none border-2 w-full "
        inputMode="numeric"
        max={maxNumber} />

  )
}
