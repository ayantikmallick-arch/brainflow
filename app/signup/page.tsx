"use client";

import Image from "next/image";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const signup = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/chat");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <main className="min-h-screen flex bg-white">

      <div className="w-1/2 flex flex-col items-center justify-center px-10">

        <h1 className="text-5xl font-bold text-black mb-12">
          Create your account
        </h1>

        <button
          onClick={signup}
          className="w-[380px] bg-black text-white py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Sign up with Google
        </button>

        <div className="w-[380px] border-t mt-10 mb-10"></div>

        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-bold text-black"
          >
            Sign in
          </Link>
        </p>

      </div>

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