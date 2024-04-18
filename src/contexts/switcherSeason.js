import { constants } from "../utils/constants";
import { createContext } from "react";

const CurrentSeasonContext = createContext({
  seasonalElements: constants.seasonalElements,

  curtime: new Date(),
  curmonth: curtime.getMonth() + 1,

  setCurMonth: (curmonth) => {
    if (curmonth == 12 || curmonth == 1 || curmonth == 2) {
      seasonalElements.forEach((element) => {
        if (element.classList.contains("spring")) {
          element.classList.remove("spring");
        }
        if (element.classList.contains("summer")) {
          element.classList.remove("summer");
        }
        if (element.classList.contains("fall")) {
          element.classList.remove("fall");
        }
        element.classList.add("winter");
      });
    } else if (curmonth == 3 || curmonth == 4 || curmonth == 5) {
      seasonalElements.forEach((element) => {
        if (element.classList.contains("winter")) {
          element.classList.remove("winter");
        }
        if (element.classList.contains("summer")) {
          element.classList.remove("summer");
        }
        if (element.classList.contains("fall")) {
          element.classList.remove("fall");
        }
        element.classList.add("spring");
      });
    } else if (curmonth == 6 || curmonth == 7 || curmonth == 8) {
      seasonalElements.forEach((element) => {
        if (element.classList.contains("spring")) {
          element.classList.remove("spring");
        }
        if (element.classList.contains("winter")) {
          element.classList.remove("winter");
        }
        if (element.classList.contains("fall")) {
          element.classList.remove("fall");
        }
        element.classList.add("summer");
      });
    } else {
      seasonalElements.forEach((element) => {
        if (element.classList.contains("spring")) {
          element.classList.remove("spring");
        }
        if (element.classList.contains("summer")) {
          element.classList.remove("summer");
        }
        if (element.classList.contains("winter")) {
          element.classList.remove("winter");
        }
        element.classList.add("fall");
      });
    }
  },
});

export { CurrentSeasonContext };
