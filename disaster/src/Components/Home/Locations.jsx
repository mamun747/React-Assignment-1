import { Button } from "../Common/Button"
import { ApproxCost, MapLocation, Plus } from "../Icons/Icon"
import { Navbar } from "./Navbar"
import { Container } from "../Common/Container"
import { Subtitle } from "../Common/subtitle"
import { Title } from "../Common/Text"
import { Buildings } from "../Data/data"

export const Locations = () => {
  return (
    <>
         <Navbar
            subtitle="Incidents - DR-4699 March 2023 Severe Storms "
            button={
              <button>
                <Button>
                <div className="flex items-center gap-[4px]">
                  <Plus /> New Location
                </div>
                </Button>
              </button>
            }
            something={
                <img src="/tree.png" alt="" />
            }
            classname="gap-[15px]"
          >
            DR-4699 March 2023 Severe Storms
          </Navbar>
          <Container>
            <div className="flex flex-col xl:flex-row gap-[94px] items-start">
            <div className="max-w-screen-sm md:max-w-[680px] mx-auto">
              <div>
              <div className="flex items-center gap-[15px]">
                <MapLocation/>
                <div>
                <Subtitle classname="text-[14px]">Location</Subtitle>
                <Title classname="text-[#09090B] text-xl">Tulare County,  Los Angles, CA 23415</Title>
                </div>
              </div>
              <div className="flex items-center gap-[15px] mt-[45px]">
                <ApproxCost/>
                <div>
                <Subtitle classname="text-[14px]">Approx. Cost:</Subtitle>
                <Title classname="text-[#09090B] text-xl">$60,607,456.00</Title>
                </div>
              </div>
              <div className="lg:block hidden w-[680px] border border-[#E4E4E7] my-10"></div>
              <div>
                <p className="font-bold text-[14px] pt-8 md:pt-0">Description</p>
                <Subtitle classname="pb-0 md:text-base pt-[15px]">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</Subtitle>
              </div>
              <div className="lg:block hidden w-[680px] border border-[#E4E4E7] my-10"></div>

              <div className="flex justify-between pb-[15px] pt-8 md:pt-0">
              <p className="font-bold text-[14px]">Locations</p>
              <p className="text-[14px] text-[#A1A1AA] underline cursor-pointer">See all</p>
              </div>
              <div>
              <div className='flex flex-wrap gap-[17.5px] xl:justify-normal justify-center items-center'>
                {
                    Buildings.map(({img, title, subTitle, price, img2, text}, i) => (
                        <div key={i}>
                            <div className='relative hover:scale-105 transition-all'>
                            <img src={img} alt="" />
                            <div className='absolute top-2 right-6 p-[7px] bg-white rounded-[40px]'>
                                <div className='flex gap-[4px] items-center'>
                                    <img src={img2} alt="" />
                                    <p className='text-[#18181B] font-bold text-twelve'>{text}</p>
                                </div>
                            </div>
                            </div>
                            <div className='space-y-[11.2px]'>
                            <p className='font-bold text-base pt-5'>{title}</p>
                            <Subtitle classname="leading-[21px] pb-0">{subTitle}</Subtitle>
                            <p className="font-bold text-[14px] leading-[21px]">{price}</p>
                            </div>
                            </div>
                    ))
                }
            </div>
              </div>

              <div className="lg:block hidden w-[680px] border border-[#E4E4E7] my-10"></div>

              <div>
              <div className="flex justify-between pb-[15px] pt-8 md:pt-0">
              <p className="font-bold text-[14px]">Locations</p>
              <p className="text-[14px] text-[##0A0A0A] underline cursor-pointer">See all</p>
              </div>
              <div className="w-full bg-chatboxBg  rounded-[10px] hover:scale-105 transition-all">
                <div className="py-[15px] ps-[10px] flex gap-[17px] items-center">
                  <img src="/building1.png" className="w-[78px] h-auto rounded-[10px]" 
                  alt="" />
                  <div className="flex gap-1 flex-col">
                    <h3 className="font-bold text-base">Activity name</h3>
                    <div className="flex gap-1 justify-between items-center">
                    <p className="text-twelve md:text-[14px] text-accent">Location name</p>
                    <span className="w-1 h-1 bg-[#A1A1AA] rounded-full"></span>
                    <p className="text-twelve md:text-[14px] text-[#A1A1AA]">16.12212, -122.1424</p>
                    </div>
                  <p className="font-bold text-[14px] leading-[21px]">$1,456,654.00</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="pt-[15px]">
              <div className="w-full bg-chatboxBg  rounded-[10px] hover:scale-105 transition-all">
                <div className="py-[15px] ps-[10px] flex gap-[17px] items-center">
                  <img src="/building1.png" className="w-[78px] h-auto rounded-[10px]" 
                  alt="" />
                  <div className="flex gap-1 flex-col">
                    <h3 className="font-bold text-base">Activity name</h3>
                    <div className="flex gap-1 justify-between items-center">
                    <p className="text-[14px] text-accent">Location name</p>
                    <span className="w-1 h-1 bg-[#A1A1AA] rounded-full"></span>
                    <p className="text-twelve md:text-[14px] text-[#A1A1AA]">16.12212, -122.1424</p>
                    </div>
                  <p className="font-bold text-[14px] leading-[21px]">$1,456,654.00</p>
                  </div>
                </div>
              </div>
              </div>


              <div className="lg:block hidden w-[680px] border border-[#E4E4E7] my-10"></div>

              <div>
              <div className="flex justify-between pb-[15px] pt-8 md:pt-0">
              <p className="font-bold text-[14px]">Documents</p>
              <p className="text-[14px] text-[##0A0A0A] underline cursor-pointer">See all</p>
              </div>
              <div className="w-full bg-chatboxBg  rounded-[10px] hover:scale-105 transition-all">
                <div className="py-[15px] ps-[10px] flex gap-[17px] items-center">
                  <img src="/building1.png" className="w-[78px] h-auto rounded-[10px]" 
                  alt="" />
                  <div className="flex gap-1 flex-col">
                    <h3 className="font-bold text-base">Document name</h3>
                    <div className="flex gap-1 justify-between items-center">
                    <p className="text-[14px] text-accent">Location name</p>
                    <span className="w-1 h-1 bg-[#A1A1AA] rounded-full"></span>
                    <p className="text-twelve md:text-[14px] text-[#A1A1AA]">16.12212, -122.1424</p>
                    </div>
                  <p className="font-bold text-[14px] leading-[21px]">$1,456,654.00</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="pt-[15px] pb-[30px]">
              <div className="w-full bg-chatboxBg  rounded-[10px] hover:scale-105 transition-all">
                <div className="py-[15px] ps-[10px] flex gap-[17px] items-center">
                  <img src="/building1.png" className="w-[78px] h-auto rounded-[10px]" 
                  alt="" />
                  <div className="flex gap-1 flex-col">
                    <h3 className="font-bold text-base">Document name</h3>
                    <div className="flex gap-1 justify-between items-center">
                    <p className="text-[14px] text-accent">Location name</p>
                    <span className="w-1 h-1 bg-[#A1A1AA] rounded-full"></span>
                    <p className="text-twelve md:text-[14px] text-[#A1A1AA]">16.12212, -122.1424</p>
                    </div>
                  <p className="font-bold text-[14px] leading-[21px]">$1,456,654.00</p>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
              <div className="max-w-[526px] h-[503px] flex flex-col gap-5 mx-auto">
                <Subtitle classname="text-[14px] pb-0">Incident Map</Subtitle>
                <div className="relative">
                <img src="/map.png" className="rounded-[10px]" alt="" />
                <div>
                  <div>
                  <img src="/location-border.png" className="w-[20px] md:w-fit absolute top-[56px] left-[168px]"  alt="" />
                  <div className="w-[15px] md:w-[30px] h-[10px] opacity-[40%] absolute bg-black rounded-3xl md:top-[94px] top-[77px] left-[171px]"></div>
                  </div>
                  <div>
                    <img src="/location-border.png" className="w-[20px] md:w-fit absolute left-[105px] top-[116px]"  alt="" />
                    <div className="md:w-[30px] w-[15px] h-[10px] opacity-[40%] absolute bg-black rounded-3xl top-[140px] md:top-[154px] left-[108px]"></div>
                  </div>
                  <div>
                  <img src="/location-border.png" className="w-[20px] md:w-fit absolute top-[116px] left-[203px]"  alt="" />
                  <div className="w-[15px] md:w-[30px] h-[10px] opacity-[40%] absolute bg-black rounded-3xl top-[138px] md:top-[154px] left-[206px]"></div>
                  </div>
                  <div>
                  <img src="/location-border.png" className="w-[20px] md:w-fit absolute top-[156px] md:top-[196px] left-[131px]"  alt="" />
                  <div className="w-[15px] md:w-[30px] h-[10px] opacity-[40%] absolute bg-black rounded-3xl top-[177px] md:top-[234px] left-[134px]"></div>
                  </div>
                  <div>
                  <img src="/location-border.png" className="w-[20px] md:w-fit absolute top-[166px] md:top-[176px] left-[203px]"  alt="" />
                  <div className="w-[15px] md:w-[30px] h-[10px] opacity-[40%] absolute bg-black rounded-3xl top-[188px] md:top-[214px] left-[206px]"></div>
                  </div>
                </div>
                </div>
                <Subtitle classname="text-[14px] pb-0">Start 19.1232, -118.233     End 19.3245, -119.2323</Subtitle>
              </div>
            </div>
          </Container>
    </>
  )
}
