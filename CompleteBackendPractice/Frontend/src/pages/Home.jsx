import React from "react";
import { Link } from "react-router";
import { ArrowRight, PenLine, Users, Sparkles, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <Sparkles size={16} />
                Share. Create. Connect.
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Share Your
                <span className="block text-blue-600">
                  Ideas With The World
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Create meaningful posts, share your thoughts and discover
                interesting ideas from a growing community.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/create"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
                >
                  <PenLine size={18} />
                  Create a Post
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/posts"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  <FileText size={18} />
                  Explore Posts
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                {/* Fake Post Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                    M
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Maseeh Ullah
                    </p>

                    <p className="text-xs text-slate-400">Just now</p>
                  </div>
                </div>

                {/* Fake Post */}
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    Learning Never Stops
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Every new concept we learn brings us one step closer to
                    becoming better at what we do.
                  </p>
                </div>

                {/* Fake Image */}
                <div className="mt-6 h-48 overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600">
                  <div className="flex h-full items-center justify-center">
                    <Sparkles size={64} className="text-white/80" />
                  </div>
                </div>

                {/* Fake Actions */}
                <div className="mt-5 flex items-center gap-6 border-t border-slate-100 pt-4 text-sm text-slate-400">
                  <span>♡ 24 Likes</span>
                  <span>💬 8 Comments</span>
                  <span>↗ Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y border-slate-200 bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Everything You Need
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              A simple platform to create, share and discover interesting
              content.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <PenLine size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Create Posts
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Write and publish your thoughts with a simple and easy-to-use
                editor.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <Users size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Connect
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Discover posts and ideas shared by other people in the
                community.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Sparkles size={23} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Share Ideas
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Turn your ideas into meaningful posts and share them with the
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl shadow-blue-200 sm:px-12">
          <h2 className="text-3xl font-bold text-white">
            Ready to Share Your Idea?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100">
            Create your first post and start sharing your ideas with the
            community.
          </p>

          <Link
            to="/create"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Start Creating
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
