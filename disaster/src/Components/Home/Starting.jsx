import { useState } from "react";
import { Button } from "../Common/Button"
import { CommonNav } from "../Common/CommonNav"
import { Nav } from "../Common/Navclasse"
import { CardData } from "../Data/data";
import { HorizontalLine } from "../Icons/Icon";
import { NewIncident } from "./NewIncident";

export const Starting = ({ onclick }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(pre => !pre)
  }
  return (
    <>
      <Nav>
        <CommonNav/>
      </Nav>
      { active ? <NewIncident onclick={toggleActive}/> : (
        <>

      <div className="md:max-w-[815px] mx-auto h-[457px] mt-[85px]">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-[32px] leading-[40.8px] text-[#09090B]">Let’s get started</h1>
          <p className="text-base leading-[26px] text-accent text-center max-w-[468px] pt-[14px]">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene
          </p>
          <div className="pt-[33px] md:block hidden">
          <HorizontalLine/>
          </div>
          <div className="flex gap-[55px] flex-wrap justify-center pt-[33px]">
            {
              CardData.map(({img, title, subTitle}, i) => (
                <div key={i} className="bg-chatboxBg border w-[235px] h-[269px] rounded-[10px]">
                  <div className="max-w-[195px] pb-3 mx-auto">
                  <img className="pt-[25px]" src={img} alt="" />
                  <div className="pt-[60px]">
                  <p className="font-bold text-xl">{title}</p>
                  <p className="text-accent text-[14px] pt-[22px]">{subTitle}</p>
                  </div>
                  </div>
                </div>
              ))
            }
          </div>
          </div>
          <div className="text-center pt-[55px] md:pt-[85px] pb-[44px] md:pb-[164px]">
          <button onClick={toggleActive}><Button>Get Started</Button></button>
          </div>
        </div>
        </>
)
}
    </>
  );
};
