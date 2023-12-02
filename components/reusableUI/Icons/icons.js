import React from "react";
import Search from "./search";
import ArrowRight from "./arrowRight";
import Accessibility from "./accessibility";
import DropInReady from "./drop-in-ready";
import Mobile from "./mobile";
import Tick from "./tick";
import UpsideDownComma from "./upsideDownComma";
import Figma from "./figma";
import Play from "./play";
import Logo from "./logo";
import Chevron from "./chevron";

function icons({ icon, customClasses }) {
  let iconElement = null;

  switch (icon) {
    case "chevron":
      iconElement = <Chevron />;
      break;
    case "search":
      iconElement = <Search />;
      break;
    case "arrow-right":
      iconElement = <ArrowRight />;
      break;
    case "dropInReady":
      iconElement = <DropInReady />;
      break;
    case "upsideDownComma":
      iconElement = <UpsideDownComma />;
      break;
    case "accessibility":
      iconElement = <Accessibility />;
      break;
    case "tick":
      iconElement = <Tick />;
      break;
    case "mobile":
      iconElement = <Mobile />;
      break;
    case "figma":
      iconElement = <Figma />;
      break;
    case "play":
      iconElement = <Play />;
      break;
    case "logo":
      iconElement = <Logo />;
    default:
      break;
  }

  return <div className={customClasses}>{iconElement}</div>;
}

export default icons;
