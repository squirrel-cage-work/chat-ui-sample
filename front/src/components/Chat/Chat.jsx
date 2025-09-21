import { useContext, useState, useEffect, use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';
import { callBedrockAgentCore } from "../../api/callBedrockAgentCore";

// import custom module
export { callBedrockAgentCore } from '../../api/callBedrockAgentCore';

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
        // setMessages([...newMessage, { role: "assistant", content: "AI です" }])
        try {
            const response = await callBedrockAgentCore(jwtToken, input);
            const aiMessage = response?.output?.message?.content?.[0]?.text ?? " do not response from AI agent";
            setMessages([...newMessage, { role: "assistant", content: aiMessage }]);
        } catch (error) {
            setMessages([...newMessage, { role: "assistant", content: "error" }]);
        }

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
                <div className="mx-auto h-200 overflow-y-auto w-[70%] mt-20">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`mb-1 mr-2 ml-2 max-w-[85%] ${msg.role === "user"
                                ? "ml-auto bg-blue-400 rounded-2xl text-white px-4 py-2"
                                : "mr-auto bg-gray-300 rounded-2xl text-black px-4 py-2"
                                }`}
                        >
                            {msg.role === "assistant" && (
                                <FontAwesomeIcon icon={faRobot} className="mr-2" />
                            )}
                            {msg.role === "user" && (
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                            )}
                            <span className="whitespace-pre-wrap">{msg.content}</span>
                        </div>
                    ))}
                </div>
                {/* 
            インプットエリアの定義：３行で Send をクリックすると textarea をクリアする
            */}
                    <div className="flex flex-col items-center mt-10">
                        <textarea
                            rows={3}
                            className="border rounded focus:outline-none focus:ring focus:border-blue-500 resize-none h-32 w-[70%] mb-4"
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
