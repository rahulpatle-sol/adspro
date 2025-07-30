import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Reset Your Password</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Remembered your password? <a href="/login" className="text-indigo-600 hover:underline">Login</a>
        </div>
      </div>
    </section>
  )
}

export default ForgotPasswordPage
