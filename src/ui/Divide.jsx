import img from "../assets/images/icon-arrow.svg"
export default function Divide({onSend}) {
  return (
    <div className="flex items-center">
      <div className="border-t-2 border-white-300/50  w-full "></div>
      <div onClick={onSend} >
        <img src={img} alt="" className="bg-black p-4 shadow-2xl hover:bg-white-300/90 transition-colors duration-300  rounded-full cursor-pointer"/>

      </div>
    </div>
  )
}
