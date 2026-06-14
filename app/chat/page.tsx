
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const sendMessage = () => {
    if (!message.trim()) return;

    localStorage.setItem("firstMessage", message);

    router.push(`/chat/${Date.now()}`);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-5">

        <div className="w-14 h-14 rounded-full border-2 border-cyan-500 overflow-hidden">
          <Image
            src="/Brain.png"
            alt="BrainFlow"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-4">
          <Link
            href="/signin"
            className="px-5 py-2 border border-slate-700 rounded-full"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 bg-cyan-500 text-black rounded-full font-bold"
          >
            Sign up
          </Link>
        </div>

      </div>

      {/* Center */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">

        <div className="w-64 h-64 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_70px_rgba(34,211,238,0.6)]">
          <Image
            src="/Brain.png"
            alt="BrainFlow"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-8xl font-black mt-8">
          BrainFlow
        </h1>

        <div className="w-full max-w-3xl mt-10">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full px-6 py-4">

            <span className="text-2xl mr-4">+</span>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="What do you want to know?"
              className="flex-1 bg-transparent outline-none"
            />

            <button
              onClick={sendMessage}
              className="text-cyan-400 text-xl"
            >
              ↑
            </button>

          </div>
        </div>

        <div className="w-full max-w-3xl mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

            <div className="flex justify-center items-center gap-3">
              <h2 className="text-3xl font-bold">
                BrainFlow Build
              </h2>

              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                Beta
              </span>
            </div>

            <p className="text-slate-400 mt-4">
              Early access to BrainFlow AI, research tools,
              coding assistant and upcoming features.
            </p>

          </div>
        </div>

      </div>

    </main>
  );
}
