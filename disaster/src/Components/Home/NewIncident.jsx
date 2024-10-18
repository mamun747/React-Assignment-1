import { useState } from "react"
import { Nav } from "../Common/Navclasse"
import { SecondNav } from "../Common/SecondNav"
import { Subtitle } from "../Common/subtitle"
import { NewIncidentsData } from "../Data/data"
import { Description } from "./Description"
import { CommonContainer } from "../Common/CommonContainer"
import { Title } from "../Common/Text"

export const NewIncident = ({onclick}) => {
  const [isActive, setIsActive] = useState(false);

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
    <SecondNav step="Next step" fonclick={onclick} thirdonclick={onclick} secondonclick={togglePage}/>
    </Nav>
    <CommonContainer>
      <div>
        <Title>Which of these best describes the incident?</Title>
        <div className="flex flex-wrap gap-[11px] pt-[25px] md:justify-normal justify-center">
          {
            NewIncidentsData.map(({img, title}, i) => (
              <div key={i} className="w-[180px] h-[69px] bg-chatboxBg rounded-md border border-[#E4E4E7] flex gap-[7.5px] items-center ps-[20.28px] flex-wrap hover:bg-orange group cursor-pointer">
                <img className="group-hover:" src={img} alt="" />
                <div>
                  <Subtitle classname="text-[14px] pb-0 group-hover:text-white">{title}</Subtitle>
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