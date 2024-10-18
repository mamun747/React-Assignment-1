import { useState } from "react";

export const ChatBox = () => {
  const [data, setData] = useState("");
  const [message, setMessage] = useState([]);
  const onclick = () => {
    console.log(data)
  }
  const handleSend = () => {
    if(data.trim()){
      setMessage([...message, data]);
      setData("")
    }
  }
    return (
      <>
        <div className="absolute -top-[420px] right-2 shadow-lg">
          <div className="md:w-[331px] w-[270px] h-[475px] bg-chatboxBg rounded-xl flex flex-col justify-between">
            {/* Header */}
            <div className="bg-orange rounded-tl-xl rounded-tr-xl py-[25px] ps-[15px]">
              <h1 className="text-white font-bold text-lg">Chat with Cypher</h1>
            </div>
  
            {/* Chat Content */}
            <div className="space-y-[15px] px-[15px] overflow-y-auto flex-grow py-[15px]">
              <div className="bg-chatBg w-[213px] rounded-[7px] h-[57px] float-right">
                <p className="py-[15px] px-[13px] text-twelve text-white">
                Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
              <div className="bg-white w-[213px] rounded-[7px] h-[57px] float-start">
                <p className="py-[15px] px-[13px] text-twelve text-accent">
                Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
              <div className="bg-white w-[213px] rounded-[7px] h-[57px] float-start">
                <p className="py-[15px] px-[13px] text-twelve text-accent">
                Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
              <div className="bg-chatBg w-[213px] rounded-[7px] h-[57px] float-right">
                <p className="py-[15px] px-[13px] text-twelve text-white">
                Lorem ipsum dolar sit general sac mascho werho
                </p>
              </div>
                {message.map((message, i) => (
              <div className="bg-chatBg w-[213px] rounded-[7px] h-[57px] float-right block" key={i}>
                  <div>
                    <p className="py-[15px] px-[13px] text-twelve text-white">{message}</p>
                  </div>
              </div>
                ))}
              <div className="clear-both"></div>
            </div>
              <div className="py-[12px] px-[10px]">
                <input
                  type="text"
                  className="text-accent w-full py-[17px] ps-[10px] border border-[#E5E7EB] rounded-md outline-none text-twelve"
                  placeholder="Enter your question..."
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
  
            {/* Footer Icons and Send Button */}
            <div className="flex justify-between items-center px-[15px] py-[10px] border-t border-[#E5E7EB]">
              <div className="flex space-x-4">
                <img src="/camera.png" alt="Camera" className="w-6 h-6 cursor-pointer hover:opacity-75" />
                <img src="/gallery.png" alt="Gallery" className="w-6 h-6 cursor-pointer hover:opacity-75" />
                <img src="/share.png" alt="Share" className="w-6 h-6 cursor-pointer hover:opacity-75" />
              </div>
              <div>
                <button className="bg-orange text-white text-twelve py-[11px] px-[25px] rounded-full hover:bg-orange-600 transition"onClick={handleSend}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };