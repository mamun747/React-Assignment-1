import { Button } from "../Common/Button"
import { Cards } from "../Home/Dashboard"
import { Navbar } from "../Home/Navbar"

export const Layout = () => {
  return (
    <>
        <Navbar subtitle="Welcome back" button={<Button>Cypher AI</Button>}>Dashboard</Navbar>
        <Cards/>
    </>
  )
}