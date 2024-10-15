import { Button } from "../Common/Button"
import { CommonNav } from "../Common/CommonNav"
import { Cards } from "../Home/Cards"

export const Layout = () => {
  return (
    <>
        <CommonNav subtitle="Welcome back" button={<Button>Cypher AI</Button>}>Dashboard</CommonNav>
        <Cards/>
    </>
  )
}