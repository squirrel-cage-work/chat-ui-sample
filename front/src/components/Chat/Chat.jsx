import { useContext, useState, useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Chat() {
    const [input, setInput] = useState(""); // from chat text erea
    const [messages, setMessages] = useState([]);
    // jwt
    const { jwtToken } = useContext(AuthContext);

    // chat 
    const hoge = [
        { role: "user", content: "ほげほげ" },
        { role: "assistant", content: "ふが" }
    ];

    const sendMessage = async () => {
        if (!input.trim()) return; //

        // チャットテキストエリアのテキストをメッセージに格納して input をクリア
        const newMessage = [...messages, { role: 'user', content: input }];
        setMessages(newMessage);
        setInput("");

        // 仮の AI Agent 応答
        setMessages([...newMessage, { role: "assistant", content: "AI です" }])
    };

    return (
        <>
            <h1 className="fixed top-10 text-3xl text-gray-600">
                Chat With AI Agent
            </h1>
            {/* 
            チャットエリア：role: user の場合は右よりに、tole: assistant の場合は左よりに表示する
             */}
            <div className="w-full flex flex-col justify-center text-cenetr">
                <div className="mx-auto h-96 overflow-y-auto w-[90%]">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`mb-1 mr-2 ml-2 max-w-[85%] ${msg.role === "user"
                                ? "mr-auto bg-blue-400 rounded-2xl text-white px-4 py-1"
                                : "ml-auto bg-gray-300 rounded-2xl text-black px-4 py-2"
                                }`}
                        >
                            {msg.content}, {msg.role}
                        </div>
                    ))}
                </div>
                {/* 
            インプットエリアの定義：３行で Send をクリックすると textarea をクリアする
            */}
                <div className="flex flex-col items-center">
                    <textarea
                        rows={3}
                        className="border rounded focus:outline-none focus:ring focus:border-blue-500 resize-none h-32 w-[90%] mb-4"
                        value={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                        placeholder="メッセージを入力..." />
                    <button
                        className="bg-blue-500 rounded py-2 px-4 text-white active:scale-95 hover:bg-blue-700 w-[10%]"
                        onClick={sendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
}
