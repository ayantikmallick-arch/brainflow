import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <div className="w-72 h-72 rounded-full border-4 border-cyan-400 bg-slate-950 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.7)]">
          <Image
            src="/Brain.png"
            alt="BrainFlow Logo"
            width={210}
            height={210}
            priority
            className="rounded-full object-contain"
          />
        </div>
<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
  BrainFlow
</h1>

        <p className="mt-5 text-xl text-slate-300 max-w-3xl">
          Your next-generation AI assistant for learning, coding,
          research, creativity and productivity.
        </p>

        <div className="flex gap-5 mt-10 flex-wrap justify-center">
          <Link
            href="/chat"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl font-bold transition-all duration-300"
          >
            Start Chatting
          </Link>

          <a
            href="mailto:ayantikmallick@gmail.com"
            className="px-8 py-4 border border-slate-700 rounded-2xl hover:bg-slate-900 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-24 max-w-6xl w-full">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Fast</h3>
            <p className="text-slate-400">
              Instant responses powered by advanced AI.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3">Smart</h3>
            <p className="text-slate-400">
              Learn, create, code and explore ideas effortlessly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-3">Secure</h3>
            <p className="text-slate-400">
              Built with privacy, security and reliability in mind.
            </p>
          </div>
        </div>

        <footer className="mt-20 mb-8 text-slate-500">
          © 2026 BrainFlow • Built by Ayantik Mallick
        </footer>

      </div>
    </main>
  );
}