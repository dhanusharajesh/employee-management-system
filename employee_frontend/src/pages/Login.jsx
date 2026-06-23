import { useState } from "react";
export default function Login({ setIsLoggedIn, setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const handleLogin = (e) => {

    e.preventDefault();

    setLoggedInUser(username);
    setIsLoggedIn(true);

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">

      <div className="relative">
        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 opacity-70 blur-sm"></div>
        <div className="relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-10 w-[380px]">
          <h1 className="text-5xl leading-normal font-black text-center mb-3 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/70 border border-white/40 rounded-2xl px-5 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/70 border border-white/40 rounded-2xl px-5 py-4 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-blue-500 mt-6 cursor-pointer hover:underline">

            Forgot Password?

          </p>

        </div>

      </div>

    </div>

  );

}