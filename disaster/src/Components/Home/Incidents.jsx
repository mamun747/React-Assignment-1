import { Card } from "../Common/Card"
import { Button } from "../Common/Button"
import { useEffect, useState } from "react"
import { Starting } from "./Starting"
import { Navbar } from "./Navbar"
import { Plus } from "../Icons/Icon"

export const Incidents = () => {
  // Retrieve the active state from localStorage or default to true
  const [active, setActive] = useState(() => {
    const savedActive = localStorage.getItem("active");
    return savedActive === "false" ? false : true; // Default to true if not in localStorage
  });

  // Store the active state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      {/* Conditionally render based on active state */}
      {active ? (
        <>
          {/* Show the Navbar and Card if active is true */}
          <Navbar
            subtitle="Home - Incidents"
            button={
              <Button el={toggleActive}>
                <div className="flex items-center gap-[4px]">
                  <Plus /> New Incident
                </div>
              </Button>
            }
          >
            Incidents
          </Navbar>
          <Card />
        </>
      ) : (
        /* Show the Starting component if active is false */
        <Starting onclick={toggleActive}/>
      )}
    </>
  );
};