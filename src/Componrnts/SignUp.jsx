import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { RegisterUser } from "../API/register";

function SignUp() {
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const firstname = e.target.firstname.value;
      const lastname = e.target.lastname.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const UserData = {
        firstname,
        lastname,
        email,
        password,
      };

      const registerPromise = new Promise(async (resolve, reject) => {
        const apicall = await RegisterUser(UserData);
        if (apicall.success === false) {
          reject(apicall?.error);
        } else {
          resolve();
          e.target.reset();
        }
      });

      await toast.promise(registerPromise, {
        loading: "Processing...",
        success: "Successfully registered",
        error: (error) => error || "Failed to register",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-orange-500 flex justify-center items-center">
      <div className="w-[60%] h-[80%] bg-white rounded-xl flex justify-center items-center gap-6 flex-col">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <form
          onSubmit={(e) => {
            handleRegisterSubmit(e);
          }}
          className=" w-full flex justify-center items-center flex-col gap-4"
        >
          <input
            type="text"
            id="firstname"
            placeholder="Enter first Name"
            className="w-[80%] h-[50px] border-2 border-black rounded-xl pl-7"
          />
          <input
            type="text"
            id="lastname"
            placeholder="Enter last Name"
            className="w-[80%] h-[50px] border-2 border-black rounded-xl pl-7"
          />
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="w-[80%] h-[50px] border-2 border-black rounded-xl pl-7"
          />
          <input
            type="password"
            id="password"
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

export default SignUp;
