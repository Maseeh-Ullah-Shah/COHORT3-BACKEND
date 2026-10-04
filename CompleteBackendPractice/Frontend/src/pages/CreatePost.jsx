import React, { useEffect } from "react";
import axios from "axios"
import { ImagePlus, Send, FileText } from "lucide-react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router";

const CreatePost = () => {
    const {register,reset,handleSubmit} = useForm()
 const navigate =  useNavigate()
    const create = async (data) => {
        try {
            console.log(data)
            //Jab image ke saath data backend ko bhejna ho, simple JSON object best format nahi hota. FormData ne text + actual file ko ek request body mein package kar diya.
             const formData = new FormData();
             formData.append("title",data.title);
             formData.append("image",data.image[0]);
             formData.append("caption",data.caption);
            const res = await axios.post("http://localhost:3000/create-post",formData);
            console.log(res);
            navigate("/posts");
        } catch (error) {
            console.log("Error in creation of post",error)
        }
    }
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <FileText size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create a New Post
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Share your thoughts and ideas with the world.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">
              Post Details
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill in the information below to create your post.
            </p>
          </div>

          <form
          onSubmit={handleSubmit(create)}
           className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Post Title
              </label>

              <input
              {...register("title")}
                type="text"
                placeholder="Enter an engaging title..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Caption
              </label>

              <textarea
              {...register("caption")}
                rows="6"
                required
                placeholder="Write something interesting..."
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Image Upload UI */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Cover Image
              </label>

              <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ImagePlus size={24} />
                </div>

                <p className="text-sm font-medium text-slate-700">
                  Click to upload or drag and drop
                </p>

                <p className="mt-1 text-xs text-slate-400">PNG, JPG or WEBP</p>

                <input
                {...register("image")}
                type="file" accept="image/*"  />
              </div>
            </div>

            {/* Submit Button UI */}
            <button
            
              type="submit"
              className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.99]"
            >
              <Send size={17} />
              Publish Post
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Create and share your ideas with the community.
        </p>
      </div>
    </div>
  );
};

export default CreatePost;
