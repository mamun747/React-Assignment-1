import { CommonNav } from "../Common/CommonNav"
import { Card } from "../Common/Card"
import { Button } from "../Common/Button"
import { Plus } from "../icons/Icon"

export const Incidents = () => {
  return (
    <>
    <CommonNav subtitle="Home - Incidents" button={<Button><div className="flex items-center gap-[4px]"><Plus></Plus>New Incident</div></Button>}>Incidents</CommonNav>
    <Card/>
    </>
  )
}
