import React, { useEffect, useRef, useState } from "react";
import Logo from "../component/Logo";
import styles from "../style";
import Input from "../component/input";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const SubmitLoginForm = async (e) => {
    e.preventDefault();
   
    try {
      if (email === '') {
        return setError("email is missing");
      }
      if (password === '') {
        return setError("Password is missing");
      }
      if (password.length < 8) {
        return setError("password length must be minimum 8 digit ");
      }
      await axios
        .post("http://localhost:3001/login", {
          headers: "application/json",
          data: {
            email: email,
            password: password,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => setError(err.message));
    } catch (error) {
      setError(error.message);
    }
  };
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
          onSubmit={SubmitLoginForm}
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
                className="mt-4 w-[370px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                className="mt-4 mb-6 w-[370px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                to="/forgotPassword"
                className="text-blue-500
            cursor-pointer pt-10 mx-2 hover:text-white
             transition-colors text-[20px]
            "
              >
                Forgot password ?
              </Link>
            </div>
          </div>
          {error && error?<span className=" text-red-700 text-xl uppercase ">{error}</span>:''}
          <Button
            className="sm:mt-0 mt-[20px]
          hover:scale-110 shadow shadow-slate-200 transition-transform
          "
            type="submit"
          >
            Login
          </Button>
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
            justify-center gap-5    hover:scale-110 shadow shadow-slate-200 
            transition-transform hover:border hover:border-cyan-600"
          >
            <FaGoogle className="text-red-800" /> Sign with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
