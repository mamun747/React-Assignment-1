import { useState } from "react";
import { Card } from "../Common/Card";
import { Container } from "../Common/Container";
import ChatOption from "../icons/Icon";
import { ChatBox } from "../Common/ChatBox";

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
            className="pt-[77px] pb-[117px] float-end"
            onClick={toggleOption}
          >
            {
                active ? <img src="/cross.png" className="p-5 shadow-cross-shadow rounded-full" alt="" /> :  <ChatOption/>
            }
          </button>
        </div>
      </Container>
    </>
  );
};
