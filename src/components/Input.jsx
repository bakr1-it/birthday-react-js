
export default function Input({maxNumber,onChange,placeholder,name}) {

  return (

        <input 
        placeholder={placeholder}
        type="tel"
        onChange={(e)=>onChange(name,e.target.value)}
        className="border font-black text-xl border-white-300/50 p-2 max-w-40 rounded-xl focus:outline-none border-2 w-full "
        inputMode="numeric"
        maxLength={maxNumber}
        max={30}
        />

  )
}
