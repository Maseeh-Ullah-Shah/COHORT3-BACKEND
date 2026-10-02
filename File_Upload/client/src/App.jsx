import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
const App = () => {
  const { register, handleSubmit, reset } = useForm();
  const formData = new FormData();

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);
    await axios.post("http://localhost:3000/user/create",formData);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Create Profile
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Enter your details and upload a profile picture
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture
            </label>

            <input
              {...register("profile_pic")}
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-2 bg-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
