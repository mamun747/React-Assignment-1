import { CommonContainer } from "../Common/CommonContainer";
import { Subtitle } from "../Common/subtitle";
import { Title } from "../Common/Text";
import { Nav } from "../Common/Navclasse";
import { SecondNav } from "../Common/SecondNav";

export const Address = ({toggle}) => {
  return (
    <>
    {/* {
      open === "false" ? (
    <> */}
    <Nav>
      <SecondNav step="Finished" fonclick={toggle} thirdonclick={toggle}/>
    </Nav>
      <CommonContainer>
        <div>
          <Title>Where’s the incident?</Title>
          <Subtitle classname="pt-3 pb-6 text-[14px]">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as possible, or click:Jurisdiction Wide
          </Subtitle>
          <div className="h-[490px] w-full overflow-hidden rounded-lg relative">
            <div>
              <img src="/map.png" alt="" />
              <img
                src="/location-border.png"
                className="absolute top-[154px] right-[281px]"
                alt=""
              />
            </div>
            <div className='flex flex-col gap-2 absolute top-2 left-2'>
      <div className='flex gap-2 items-center bg-gray-100 px-2 py-2 rounded-md'>
        <img src="/search.png" alt="" />
        <input type="text" placeholder='Enter incident address or GPS' className='outline-none bg-gray-100 w-44 text-[12px]'/>
      </div>
      <div className='flex gap-2 items-center bg-gray-100 px-2 py-2 rounded-md'>
        <img src="/search.png" alt="" />
        <input type="text" placeholder='Pinpoint damage' className='outline-none bg-gray-100 w-44 text-[12px]'/>
      </div>
    </div>
          </div>
        </div>
      </CommonContainer>
      {/* </>
      ): <Locations/>
    } */}
    </>
  );
};
