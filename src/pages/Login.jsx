import React, { useEffect, useRef } from "react";
import Logo from "../component/Logo";
import styles from "../style";
import Input from "../component/input";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const container = useRef();
  //   useGSAP(
  //     (context) => {
  //       gsap.to(".form-box", { opacity: 1, x: 120 });
  //       console.log(context);
  //     },
  //     { scope: container }
  //   );
  const navigation = useNavigate();
  return (
    <div className={`${styles.flexCenter}h-[100vh]"`}>
      <div className="my-10 form-box " ref={container}>
        <div
          className="flex items-center sm:ml-[100px] justify-center
         max-w-[340px]"
        >
          <h3 className={`${styles.heading3} text-center `}>Login with</h3>
          <Logo />
        </div>

        <form
          className="flex flex-col gap-10 items-center justify-center"
          onSubmit={() => navigation("/")}
        >
          <div
            className="flex flex-col sm:flex-row
          gap-10 mt-12"
          >
            <div>
              <Input
                label="Your email"
                type="email"
                placeholder="Enter your email"
                className="mt-4 w-[270px]"
              />
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                className="mt-4 mb-6 w-[270px]"
              />
              <Link
                to="#"
                className="text-blue-500
            cursor-pointer pt-10 mx-2 hover:text-white
             transition-colors text-[20px]
            "
              >
                Forgot password ?
              </Link>
            </div>
          </div>
          <Button className="sm:mt-0 mt-[30px]">Login</Button>
        </form>
        <span className="text-slate-400 text-center mx-[50%] text-[30px]">
          OR
        </span>
        <p className={`${styles.paragraph} text-[14px] sm:text-[30px]`}>
          Don't have an account? Create new account
          <Link
            to="/signup"
            className="text-blue-500
            cursor-pointer pt-10 mx-2 hover:text-white
             transition-colors text-[20px]
            "
          >
            Signup ?
          </Link>
        </p>
        <div>
          <Button
            className="mt-10 flex  items-center 
            justify-center gap-5"
          >
            <FaGoogle className="text-red-800" /> Sign with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
