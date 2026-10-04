import React, { useEffect, useState } from "react";
import axios from "axios"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    try {
        const res = await axios.get("http://localhost:3000/posts")
        console.log(res.data.posts)
        setPosts(res.data.posts)
    } catch (error) {
        console.log("Error while fetching posts",error)
    }
  }

useEffect(()=>{
    getAllPosts();
},[]);
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              All Posts
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Explore posts shared by the community.
            </p>
          </div>

          <button
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold
            text-white shadow-md shadow-blue-200 transition
            hover:bg-blue-700 active:scale-[0.98]"
          >
            + Create Post
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post._id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden bg-slate-200">
                <img
                  src={
                    post.image ||
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                      M
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {post.author || "Maseeh Ullah"}
                      </p>
                      <p className="text-xs text-slate-400">Community post</p>
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-slate-700">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* Post */}
                <h2 className="text-xl font-bold text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                  {post.caption}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-5">
                    <button className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-red-500">
                      <Heart size={18} />0
                    </button>

                    <button className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600">
                      <MessageCircle size={18} />0
                    </button>

                    <button className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-green-600">
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
