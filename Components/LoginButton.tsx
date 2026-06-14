"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function LoginButton() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Successfully signed in!");
    } catch (error) {
  console.error(error);

  if (error instanceof Error) {
    alert(error.message);
  } else {
    alert("Login failed");
  }
}

  return (
    <button
      onClick={login}
      className="bg-cyan-500 text-black px-6 py-2 rounded-xl font-bold"
    >
      Sign In With Google
    </button>
  );
}
}