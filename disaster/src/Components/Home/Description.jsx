import { Nav } from "../Common/Navclasse"
import { SecondNav } from "../Common/SecondNav"
import { CommonContainer } from "../Common/CommonContainer"
import { Title } from "../Common/Text"
import { Subtitle } from "../Common/subtitle"
import { useEffect, useState } from "react"
import { Address } from "./Address"

export const Description = ({handleClick}) => {
  const [click, setClick] = useState(() => {
    const state = localStorage.getItem("state");
    state === "true" ? true : false;
  })
  useEffect(() => {
    localStorage.setItem("state", click);
  }, [click]);
  const toggleComponent = () => {
    setClick(pre => !pre);
  }
  return (
    <>
    {click ? <Address toggle={toggleComponent}/> : 
    (
      <>
       <Nav>
        <SecondNav step="Next step" fonclick={handleClick} secondonclick={toggleComponent} thirdonclick={handleClick}/>
    </Nav>
    <CommonContainer>
      <div>
      <div>
        <Title>Let’s give the incident a title?</Title>
        <Subtitle classname="text-[14px] pb-6 pt-3">Make a title that will easily identify the incidents</Subtitle>
        <div>
          <input type="text" placeholder="Add title here" className="text-accent text-twelve w-full px-[10px] py-3 border border-[#E4E4E7] bg-chatboxBg rounded-md outline-none"/>
        </div>
      </div>
      <div className="pt-[25px]">
        <Title>Describe what happened during the incident?</Title>
        <Subtitle classname="text-[14px] pb-6 pt-3">Share some information about the incident. The when, where, how. </Subtitle>
        <div>
          <textarea rows="6" type="text" placeholder="Type here" className="text-accent text-twelve w-full px-[10px] py-3 border border-[#E4E4E7] bg-chatboxBg rounded-md outline-none"/>
        </div>
      </div>
      </div>
    </CommonContainer>
    </>
    )
  }
    </>
  )
}
