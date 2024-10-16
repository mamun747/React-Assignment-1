import { Nav } from "../Common/Navclasse"
import { SecondNav } from "../Common/SecondNav"

export const Description = ({handleClick}) => {
  return (
    <>
    <Nav>
        <SecondNav fonclick={handleClick} thirdonclick={handleClick}/>
    </Nav>
    </>
  )
}
