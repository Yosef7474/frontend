import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

import { FaGoogle } from "react-icons/fa6";

const Register = () => {
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

      const handleGoogleSignIn = () => {
        
      }



  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center ">
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-8 py-10">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <div>
                <label className="block text-gray-600 text-sm font-semibold mb-1" htmlFor="name">Name</label>
                <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow"
                />
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-gray-600 text-sm font-semibold mb-1" htmlFor="email">Email</label>
                <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow"
                />
            </div>

            {/* Password Input */}
            <div>
                <label className="block text-gray-600 text-sm font-semibold mb-1" htmlFor="password">Password</label>
                <input
                    {...register("password", { required: true })}
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow"
                />
            </div>

            {/* Error Message */}
            {message && <p className="text-red-500 text-xs italic mt-1">{message}</p>}

            {/* Register Button */}
            <div>
                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-2 rounded-lg focus:outline-none transition duration-300"
                >
                    Register
                </button>
            </div>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link>
        </p>

        {/* Google Sign-in Button */}
        <div className="mt-6">
            <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition duration-300"
            >
                <FaGoogle className="mr-2" />
                Sign in with Google
            </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-gray-500 text-sm">Birana Book Store</p>
    </div>
</div>

  )
}

export default Register