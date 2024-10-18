import { Card } from "../Common/Card"
import { Button } from "../Common/Button"
import { useEffect, useState } from "react"
import { Starting } from "./Starting"
import { Navbar } from "./Navbar"
import { Plus } from "../Icons/Icon"

export const Incidents = () => {
  // Retrieve the active state from localStorage or default to true
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      {/* Conditionally render based on active state */}
      {active ?  (
        /* Show the Starting component if active is false */
        <Starting onclick={toggleActive}/>
      ) : (
        <>
          {/* Show the Navbar and Card if active is true */}
          <Navbar
            subtitle="Home - Incidents"
            button={
              <button onClick={toggleActive}><Button>
                <div className="flex items-center gap-[4px]">
                  <Plus /> New Incident
                </div>
              </Button>
              </button>
            }
          >
            Incidents
          </Navbar>
          <Card />
        </>
      ) 
    }
    </>
  );
};