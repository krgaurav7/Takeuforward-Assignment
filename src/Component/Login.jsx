import { useState } from "react";
import { motion } from "framer-motion";

function LoginForm() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserName:", userName, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen m-2 ">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-350px h-350px max-w-md p-8 rounded-2xl shadow-lg bg-gray-900 backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              required
              className="w-full bg-white/90 backdrop-blur-md text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/90 backdrop-blur-md text-black px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

            <button
            type="submit"
            className="w-1/2 ml-13 text-white font-semibold py-3 
             rounded-full border border-white/30
             bg-gradient-to-b from-[oklch(41.4%_0.112_45.904)] to-[oklch(30%_0.1_45.904)]
             bg-white/10 backdrop-blur-md
             transition duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            >
              Submit
            </button>
        </form>
      </motion.div>
    </div>
  );
}


export default LoginForm;