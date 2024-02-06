interface Prop{
    text:string
}

export default function AuthButton(props:Prop) {
  return (
    <button
    type="submit"
    className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg px-4 py-2 mt-2 font-medium "
  >
    {props.text}
    <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
  </button>
  )
}
