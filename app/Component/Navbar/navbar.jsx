"use client";

import React, { useState } from "react";

import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./navbar.css";

const Navbar = () => {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Trying to register user...");
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div>
      <form>
        <nav className="">
          <div className="flex - justify-between">
            <div>
              <h1>Ego</h1>
            </div>
            <div className="flex-row space-x-4">
              <li>Home</li>
              <li>Job Listing</li>
              <li>Hire Me</li>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700">
                Email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="block rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                placeholder="Enter your email"
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="age" className="text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                placeholder="Enter your password"
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button
              onClick={registerUser}
              className="w-80 h-12 bg-teal-500 rounded-lg font-normal text-base leading-5 text-white border border-transparent"
            >
              Send
            </button>
          </div>
        </nav>
      </form>
    </div>
  );
};

export default Navbar;
