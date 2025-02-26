import { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const botMessage = { text: "I'm thinking... 🤖", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-[80vh] flex flex-col items-center bg-gray-900 text-white">
      {/* Header with Home Button */}
      <div className="w-full max-w-2xl bg-gray-800 py-3 flex items-center justify-between px-4">
        <button onClick={() => navigate("/")} className="text-white bg-blue-500 px-3 py-1 rounded-lg">
          Home
        </button>
        <span className="text-lg font-semibold">QuickCare AI Assistant</span>
        <div className="w-16" /> {/* Placeholder to balance layout */}
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-2xl flex flex-col flex-grow overflow-hidden">
        <div className="flex-1 p-4 h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-3`}>
              <div
                className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start mb-3">
              <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg text-sm">
                Typing...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Field */}
        <div className="p-3 bg-gray-800 flex items-center border-t border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-gray-700 text-white p-2 rounded-lg outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            <AiOutlineSend size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
