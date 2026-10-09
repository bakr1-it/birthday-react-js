import img from "../assets/images/icon-arrow.svg"
export default function Divide() {
  return (
    <div className="flex items-center">
      <div className="border-t-2 border-white-300/50  w-full "></div>
      <div >
        <img src={img} alt="" className="bg-black p-4 rounded-full cursor-pointer"/>

      </div>
    </div>
  )
}
