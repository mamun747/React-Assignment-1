import { Button } from "./Button"
import { Subtitle } from "./subtitle"
import { Text } from './Text'

export const SecondNav = ({fonclick, secondonclick, thirdonclick, step}) => {
    return(
        <>
            <div className="px-[10.5px] md:px-[70.5px] flex justify-between items-center">
                <div className="flex items-center gap-1 md:gap-[13px]">
                    <button onClick={thirdonclick}><img src="/crossBtn.png" alt="" /></button>
                    <div>
                        <Subtitle>Home - Incidents - New Incident</Subtitle>
                        <Text>New Incident</Text>
                    </div>
                </div>
                <div className="lg:block hidden w-[527px] h-[5px] rounded-[10px] bg-[#E5E7EB]">
                    <div className="w-[98px] h-[5px] rounded-[10px] bg-orange"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-[15px]">
                    <button onClick={fonclick}><Button cl={"bg-white border border-[#D4D4D8] text-accent"}>Back</Button></button>
                    <button onClick={secondonclick}><Button>{step}</Button></button>
                </div>
            </div>
        </>
    )
}