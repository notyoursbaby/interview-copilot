"use client";
import { useState } from "react";

export default function Mock() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Tell me about yourself." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (customText) => {
    const messageToSend = customText || input;
    if (!messageToSend) return;

    const newMessages = [...messages, { role: "user", text: messageToSend }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      setMessages([...newMessages, { role: "ai", text: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: "ai", text: "Error occurred" }]);
    }

    setLoading(false);
  };

  // 🎤 Voice input
  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🎤 Mock Interview</h1>
        <span className="text-gray-400 text-sm">AI Coach</span>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => sendMessage("Ask me a DSA question")} className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
          DSA Question
        </button>
        <button onClick={() => sendMessage("Ask HR interview question")} className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
          HR Question
        </button>
        <button onClick={() => sendMessage("Give me feedback tips")} className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
          Tips
        </button>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto space-y-3">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-3 rounded-2xl max-w-xs ${
                msg.role === "user"
                  ? "bg-white text-black"
                  : "bg-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 animate-pulse">
            Interviewer is thinking...
          </div>
        )}

      </div>

      {/* Input */}
      <div className="flex gap-2 mt-4">
        <input
          className="flex-1 p-3 rounded-xl bg-gray-900 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak or type your answer..."
        />

        <button
          onClick={startVoice}
          className="bg-gray-700 px-4 rounded-xl"
        >
          🎤
        </button>

        <button
          onClick={() => sendMessage()}
          className="bg-white text-black px-6 rounded-xl"
        >
          Send
        </button>
      </div>

    </div>
  );
}