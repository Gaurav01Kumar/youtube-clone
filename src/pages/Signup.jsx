import React from "react";
import Logo from "../component/Logo";
import styles from "../style";
import Input from "../component/input";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
  return (
    <div className={`${styles.flexCenter} signup`}>
      <div className="my-10  ">
        <div
          className="flex items-center  justify-center
         max-w-[440px]"
        >
          <h5 className="text-white  text-[20px] sm:text-[25px]">
            Create a new Account on
          </h5>
          <Logo />
        </div>

        <form
          className="flex flex-col items-center
          gap-10 mt-12 w-full"
        >
          <div
            className="flex flex-col items-center justify-between
          gap-5 mt-12 "
          >
            <div className="w-full flex gap-20 flex-col sm:flex-row items-start">
              <div>
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-4 w-[370px]"
                />
              </div>
              <div>
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-4 w-[370px]"
                />
              </div>
            </div>
            <div className="w-full flex gap-20 flex-col sm:flex-row items-start">
              <div>
                <Input
                  label="Username"
                  type="text"
                  placeholder="Enter your userName"
                  className="mt-4 w-[370px]"
                />
              </div>
              <div>
                <Input
                  label="Your email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-4 w-[370px]"
                />
              </div>
            </div>
            <div className="w-full flex gap-20 flex-col sm:flex-row items-start">
              <div>
                <Input
                  label="New password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-4 w-[370px]"
                />
              </div>
              <div>
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder="Re-enter your password"
                  className="mt-4 w-[370px]"
                />
              </div>
            </div>

            <div className="w-full flex gap-20 flex-col sm:flex-row items-start">
              <div>
                <Input label="Avtar" type="file" className="mt-4 w-[370px]" />
              </div>
              <div>
                <Input
                  label="Cover Image"
                  type="file"
                  placeholder="Re-enter your password"
                  className="mt-4 w-[370px]"
                />
              </div>
            </div>
          </div>
          <Button
            className="w-[270px]  hover:scale-110 shadow shadow-slate-200 
            transition-transform hover:border hover:border-cyan-600"
          >
            Signup
          </Button>
        </form>
        <span className="text-slate-400 text-center mx-[50%] text-[30px]">
          OR
        </span>
        <p className={`${styles.paragraph} text-right`}>
          Already have an account?
          <Link
            to="/login"
            className="text-blue-500
            cursor-pointer pt-10 mx-2 hover:text-white
             transition-colors text-[20px]
            "
          >
            Login ?
          </Link>
        </p>
        <div>
          <Button
            className="mt-10 flex  items-center 
            justify-center gap-5  hover:scale-110 shadow shadow-slate-200 
            transition-transform hover:border hover:border-cyan-600"
          >
            <FaGoogle className="text-red-800" /> Signup with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
