import React from "react";
import { LoginUser } from "../API/register";
import toast from "react-hot-toast";

function Login() {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = e.target.loginemail.value;
      const password = e.target.loginpassword.value;
      const formData = {
        email,
        password,
      };

      const loginPromise = new Promise(async (resolve, reject) => {
        const response = await LoginUser(formData);
        if (response.success === false) {
          reject(response?.error);
        } else {
          resolve();
          e.target.reset();
        }
      });

      await toast.promise(loginPromise, {
        loading: "loging in...",
        success: "Logged in successfully",
        error: (error) => error || "failed to login",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-orange-500 flex justify-center items-center">
      <div className="w-[60%] h-[80%] bg-white rounded-xl flex justify-center items-center gap-6 flex-col">
        <h1 className="text-xl font-bold">Sign In</h1>
        <form
          onSubmit={(e) => {
            handleLoginSubmit(e);
          }}
          className=" w-full flex justify-center items-center flex-col gap-4"
        >
          <input
            type="email"
            id="loginemail"
            placeholder="Enter Email"
            className="w-[80%] h-[50px] border-2 border-black rounded-xl  pl-7"
          />
          <input
            type="password"
            id="loginpassword"
            placeholder="Enter Password"
            className="w-[80%] h-[50px] border-2 border-black rounded-xl pl-7"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-orange-500 py-2 px-8 border-2 border-black rounded-xl shadow-md shadow-black"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
