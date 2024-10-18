import { Button } from "../Common/Button"
import { ErrorMsg } from "../Common/ErrorMsg"
import { Navbar } from "./Navbar"

export const CypherAI = () => {
  return (
    <>
    <Navbar children={"Cypher AI"} subtitle={"Welcome back"} button={
      <Button>Cypher AI</Button>
    }/>
    <ErrorMsg/>
    </>
  )
}
