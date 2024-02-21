import React, { useEffect, useRef } from "react";
import Logo from "../component/Logo";
import styles from "../style";
import Input from "../component/input";
import { Link } from "react-router-dom";
import Button from "../component/Button";

import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const ForgotPassword = () => {
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
          <h3 className={`${styles.heading3} text-center `}>Change password</h3>
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
                label="New Password"
                type="email"
                placeholder="Enter your email"
                className="mt-4 w-[370px]"
              />
            </div>
            <div>
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Enter your password"
                className="mt-4 mb-6 w-[370px]"
              />
          
            </div>
          </div>
          <Button className="sm:mt-0 mt-[30px]
          hover:scale-110 shadow shadow-slate-200 transition-transform
          ">Change password</Button>
        </form>
     
      </div>
    </div>
  );
};

export default ForgotPassword;
