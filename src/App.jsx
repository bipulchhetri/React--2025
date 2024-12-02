import React from "react";
import Course from "./component/Course";
import { EventHandler } from "./component/EventHandler";
import { Eventprop } from "./component/Eventprop";
import StateL from "./component/StateL";
import { Toggle } from "./Projects/Toggle";
// import { Eventchild, Eventprop } from "./component/Eventprop";

export const App = () => {
  return (
    <>
  {/* <Course name={'Eye of Tears'} rating={`Rating 5.2`} />
  <Course name={'Eye of Man'} rating={`Rating 5.2`} /> */}

{/* <Course/> */}
{/* <EventHandler/> */}
{/* <Eventchild/> */}
{/* <Eventprop/> */}
<StateL/>
<Toggle/>
    </>
  );
};

