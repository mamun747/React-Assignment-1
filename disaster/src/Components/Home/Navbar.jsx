import { CommonNav } from "../Common/CommonNav"
import { Nav } from "../Common/Navclasse"
import { Subtitle } from "../Common/subtitle"
import { Text } from "../Common/Text"
import { Search } from "../Icons/Icon"
export const Navbar = ({children, subtitle, button}) => {
  return (
    <>
    <Nav>
        <CommonNav/>
     <div className="flex justify-between items-center px-3 md:px-5 lg:px-10 xl:px-[86px] pt-8">
                    <div>
                        <Subtitle>{subtitle}</Subtitle>
                        <Text>{children}</Text>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-[10px] lg:gap-3 xl:gap-[14px] items-center">
                        <div className="flex items-center bg-white gap-[5px] text-accent rounded-md border-0 outline-none py-[8px] md:py-[12px] text-[10px] md:text-twelve px-1 md:px-[10px]">
                            <Search />
                            <input type="text" placeholder="Search incident" className="border-0 outline-none" />
                        </div>
                        <div className="flex items-center bg-white gap-[5px] rounded-md border-0 outline-none py-[8px] md:py-[12px] px-1 md:px-[10px] text-[10px] md:text-twelve">
                            <p className="text-normal-accent">Sort By: </p>
                            <input type="text" placeholder="Date modified" className="border-0 outline-none text-accent" />
                        </div>
                        <div>
                            {button}
                        </div>
                    </div>
                </div>
                </Nav>
    </>
  )
}
