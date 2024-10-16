import { useState } from "react"
import { Nav } from "../Common/Navclasse"
import { SecondNav } from "../Common/SecondNav"
import { Subtitle } from "../Common/subtitle"
import { NewIncidentsData } from "../Data/data"
import { useEffect } from "react"
import { Description } from "./Description"
import { CommonContainer } from "../Common/CommonContainer"
import { Title } from "../Common/Text"

export const NewIncident = ({onclick}) => {
  const [isActive, setIsActive] = useState(() => {
    const storage = localStorage.getItem("isActive");
    storage === "false" ? false : true;
  });

    useEffect(() => {
    localStorage.setItem("isActive", isActive);
  }, [isActive]);

  const togglePage = () => {
    setIsActive(pre => !pre);
  }
  return (
    <>
    {
      isActive ? <Description handleClick={togglePage}/> :
      (
        <>
    <Nav>
    <SecondNav fonclick={onclick} thirdonclick={onclick} secondonclick={togglePage}/>
    </Nav>
    <CommonContainer>
      <div>
        <Title>Which of these best describes the incident?</Title>
        <div className="flex flex-wrap gap-[11px] pt-[25px] md:justify-normal justify-center">
          {
            NewIncidentsData.map(({img, title}, i) => (
              <div key={i} className="w-[180px] h-[69px] bg-chatboxBg rounded-md border border-[#E4E4E7] flex gap-[7.5px] items-center ps-[20.28px] flex-wrap hover:bg-orange group">
                <img src={img} alt="" />
                <div>
                  <p><Subtitle classname="text-[14px] pb-0 group-hover:text-white">{title}</Subtitle></p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </CommonContainer>
          </>
      )  
    }
    </>
  )
}