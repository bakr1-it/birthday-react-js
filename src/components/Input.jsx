
export default function Input({maxNumber}) {
  return (

        <input 
        type="tel"
        className="border border-white-300 p-2 max-w-40 rounded-xl focus:outline-none border-2 "
        inputMode="numeric"
        max={maxNumber} />

  )
}
