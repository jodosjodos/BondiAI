import { Link } from "react-router-dom";
import Motto from "../components/Motto";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div>
      <div className=" h-screen p-5">
        <Link to="/" className="font-extrabold text-2xl ">
          BondiAI
        </Link>

        <div className=" flex flex-row   items-center  justify-around  py-20">
          <Motto />

          <div className=" bg-[#19151E] flex flex-col items-center justify-center py-16 mx-12 px-24   gap-12 ">
            <h1 className="self-start font-bold text-3xl">Welcome back, </h1>
            <form className=" flex flex-col gap-8 w-full">
              <div className=" flex flex-col gap-2">
                <label htmlFor="email">Email : </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] outline-1"
                  placeholder=" enter  your email "
                />
              </div>

              <div className=" flex flex-col gap-2">
                <label htmlFor="password"> Password : </label>
                <input
                  type="password"
                  id="password"
                  className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] outline-4"
                  placeholder=" enter  password "
                />
              </div>
              <div className=" flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <Link to="#" className="text-[#42236A]">
                  Forgot Password?
                </Link>
              </div>
              <button className=" bg-[#130B1D] py-3 font-bold rounded-md">
                Sign in
              </button>
              <p className="or">Or</p>
              <button className="flex flex-row items-center   justify-center gap-3 bg-white text-black rounded-md p-2">
                <FcGoogle size={40} />
                <span className="  text-xl">Sign in with Google</span>
              </button>
              <div className=" flex flex-row gap-3">
                <p className="font-bold">Don’t have an account ?</p>
                <Link to="/sign-up" className="text-[#42236A] underline ">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
