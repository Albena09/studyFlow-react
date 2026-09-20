import { LuNotebookText } from "react-icons/lu"


const Navbar = () => {
  return (
    <div className="bg-[#f0f1eb]">
       <nav className="flex justify-between gap-4 items-center py-4  container mx-auto">
               <span className="">
                 <LuNotebookText className="text-green-400 h-[40px] w-[40px]" />
               </span>
               <ul className="flex gap-4 items-center text-slate-900">
                 <li>
                   <a href="">Features</a>
                 </li>
                 <li>
                   <a href="">How it Works</a>
                 </li>
                 <li>
                   <a href="">Pricing</a>
                 </li>
                 <li>
                   <a href="">FAQ</a>
                 </li>
               </ul>
               <div className="flex items-center gap-4">
                 <button className="px-4 py-2 rounded font-bold text-xl">Login</button>
                 <button className="bg-[#0e7c66] px-4 py-2 rounded font-bold text-xl text-white">
                   Get Started
                 </button>
               </div>
             </nav>
        </div>
  )
}

export default Navbar