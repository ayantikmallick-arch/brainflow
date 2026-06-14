
"use client";

import { useEffect, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
type Chat = {
  id: string;
  title: string;
  pinned: boolean;
  messages: Message[];
};

const [chatHistory, setChatHistory] = useState<Chat[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setChatHistory((prev) => {
 const updated: Chat[] = [
    {
  id: Date.now().toString(),
  title: userMessage,
  pinned: false,
  messages: [
    {
      role: "user",
      content: userMessage,
    },
  ],
},
    ...prev,
  ];

  localStorage.setItem(
    "chatHistory",
    JSON.stringify(updated)
  );

  return updated;
});
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.text,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error connecting to Gemini",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const firstMessage = localStorage.getItem("firstMessage");

  if (firstMessage) {
    setInput(firstMessage);
  }

  const savedChats = localStorage.getItem("chatHistory");

  if (savedChats) {
    setChatHistory(JSON.parse(savedChats));
  }
}, []);

  return (
    <main className="h-screen bg-black text-white flex">
      <div className="w-72 border-r border-slate-800 flex flex-col">
        <div className="p-5 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-cyan-400">
            BrainFlow
          </h1>
        </div>

        <div className="p-4">
          <button
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl"
            onClick={() => {
              setMessages([]);
            }}
          >
            + New Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3">
          <h2 className="text-sm text-slate-400 mb-3">
            Recent Chats
          </h2>
          <div className="space-y-2">
  {chatHistory.map((chat) => (
  <button
    key={chat.id}
    onClick={() => {
      setMessages(chat.messages);
    }}
    className="w-full text-left bg-slate-900 hover:bg-slate-800 p-3 rounded-xl text-sm"
  >
    {chat.title}
  </button>
))}
</div>
        </div>

        <div className="border-t border-slate-800 p-4">
          <p>User</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-5 py-4 rounded-3xl ${
                    msg.role === "user"
                      ? "bg-cyan-500 text-black"
                      : "bg-slate-900 border border-slate-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-slate-400">
                BrainFlow is typing...
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="max-w-5xl mx-auto flex gap-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message BrainFlow..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="bg-cyan-500 text-black px-6 rounded-xl font-bold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

