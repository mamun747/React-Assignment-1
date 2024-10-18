import { Button } from "../Common/Button"
import { ErrorMsg } from "../Common/ErrorMsg"
import { Navbar } from "./Navbar"

export const Documents = () => {
  return (
    <>
    <Navbar subtitle={"Welcome back"} children={"Documents"} button={
        <Button>Cypher AI</Button>
    }/>
    <ErrorMsg/>
    </>
  )
}
