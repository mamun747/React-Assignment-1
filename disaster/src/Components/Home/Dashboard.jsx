import { useState } from "react";
import { Card } from "../Common/Card";
import { Container } from "../Common/Container";
import { ChatBox } from "../Common/ChatBox";
import ChatOption from "../Icons/Icon";

export const Cards = () => {
  const [active, setActive] = useState(false);
  const toggleOption = () => {
    setActive((pre) => !pre);
  };
  return (
    <>
      <Container>
        <Card />
        <div className="relative">
          <div className="absolute right-2">
            {
                active && <ChatBox/>
            }
            </div>
          <button
            className="hover:opacity-80  mt-[67px] mb-[117px] transition-all float-end"
            onClick={toggleOption}
          >
            {
                active ? <img src="/cross.png" className="hover:scale-110 p-5 shadow-cross-shadow rounded-full" alt="" /> :  <ChatOption/>
            }
          </button>
          </div>
      </Container>
    </>
  );
};
