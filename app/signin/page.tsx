"use client";

import Image from "next/image";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/chat");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <main className="min-h-screen flex bg-white">

      {/* Left Side */}
      <div className="w-1/2 flex flex-col items-center justify-center px-10">

        <h1 className="text-5xl font-bold text-black mb-12">
          Log into your account
        </h1>

        <button
          onClick={login}
          className="w-[380px] bg-black text-white py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Continue with Google
        </button>

        <div className="w-[380px] border-t mt-10 mb-10"></div>

        <p className="text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-bold text-black"
          >
            Sign up
          </Link>
        </p>

      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-black flex items-center justify-center relative overflow-hidden">

        <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500 blur-[180px] opacity-20"></div>

        <Image
          src="/Brain.png"
          alt="BrainFlow"
          width={500}
          height={500}
          priority
          className="relative z-10 object-contain"
        />

      </div>

    </main>
  );
}