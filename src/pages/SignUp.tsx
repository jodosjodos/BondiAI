  import { Link } from "react-router-dom";
  import Motto from "../components/Motto";
  import * as yup from "yup";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useEffect } from "react";
  const schema = yup.object().shape({
    fullName: yup.string().required().min(3),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required().min(10).max(25),
    password: yup.string().required().min(6),
  });

  interface DataType {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }

  const SignUp = () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitSuccessful },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });

    const handleSubmitter = (data: DataType) => {
      console.log(isSubmitSuccessful);
      
      console.log(data);
    
    };
    useEffect(() => {
      if (isSubmitSuccessful) reset();
    }, [reset]);
    return (
      <div>
        <div className="  h-fit p-12">
          <Link to="/" className="font-extrabold text-2xl ">
            BondiAI
          </Link>

          <div className=" flex flex-row   items-center  justify-around   py-[3.2rem]">
            <Motto />

            <div className=" bg-[#19151E] flex flex-col items-center justify-center py-16 mx-12 px-24   gap-12 ">
              <h1 className="self-start font-bold text-3xl">Create Account</h1>
              <form
                className=" flex flex-col gap-9 w-full"
                onSubmit={handleSubmit(handleSubmitter)}
              >
                <div className=" flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-bold">
                    Full Name :
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] outline-4"
                    placeholder=" enter  your full name here "
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 font-bold">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="email">Email : </label>
                  <input
                    type="email"
                    id="email"
                    className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] outline-1"
                    placeholder=" enter  your email "
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 font-bold">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="phoneNumber"> Phone Number : </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] "
                    placeholder=" enter  your phone number "
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 font-bold">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="password"> Password : </label>
                  <input
                    type="password"
                    id="password"
                    className="rounded-md h-10 w-96 border-none  ac text-[#0B0117]  px-3 outline-[#42236A] outline-4"
                    placeholder=" enter  password "
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-400 font-bold">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button className=" bg-[#130B1D] py-3 font-bold rounded-md">
                  Sign up
                </button>
                <div className=" flex flex-row gap-3 self-center">
                  {" "}
                  <p className="font-bold">Already have an account ?</p>
                  <Link to="/sign-in" className="text-[#42236A] underline ">
                    {" "}
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SignUp;
