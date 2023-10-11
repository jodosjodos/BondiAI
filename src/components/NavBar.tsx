import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div >
        <div>
            <img src="/assets/Ellipse1.png " alt=" ellipse" className="absolute"  />
        </div>
        <div className=" flex flex-row items-center justify-between px-8 ">
            <Link to="/" className="font-extrabold text-2xl z-10">BondiAI</Link >
            <div className="flex flex-row gap-16 buttons py-6 items-center font-extrabold">
                <Link to="/sign-in"> Login</Link>
                <Link to="/sign-up" className="bg-[#0B0117] px-10 flex justify-center items-center py-2 rounded-lg "> Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar