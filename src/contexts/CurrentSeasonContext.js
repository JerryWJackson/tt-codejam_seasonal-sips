import { constants } from "../utils/constants";
import { createContext } from "react";

const time = new Date();
const curMonth = time.getMonth() + 1;

const CurrentSeasonContext = createContext({
  seasonalElements: constants.seasonalElements,

  // setSeason(): (curMonth) => {
  //   if (curMonth == 12 || curMonth == 1 || curMonth == 2) {
  //     seasonalElements.forEach((element) => {
  //       if (element.classList.contains("spring")) {
  //         element.classList.remove("spring");
  //       }
  //       if (element.classList.contains("summer")) {
  //         element.classList.remove("summer");
  //       }
  //       if (element.classList.contains("fall")) {
  //         element.classList.remove("fall");
  //       }
  //       element.classList.add("winter");
  //     });
  //   } else if (curMonth == 3 || curMonth == 4 || curMonth == 5) {
  //     seasonalElements.forEach((element) => {
  //       if (element.classList.contains("winter")) {
  //         element.classList.remove("winter");
  //       }
  //       if (element.classList.contains("summer")) {
  //         element.classList.remove("summer");
  //       }
  //       if (element.classList.contains("fall")) {
  //         element.classList.remove("fall");
  //       }
  //       element.classList.add("spring");
  //     });
  //   } else if (curMonth == 6 || curMonth == 7 || curMonth == 8) {
  //     seasonalElements.forEach((element) => {
  //       if (element.classList.contains("spring")) {
  //         element.classList.remove("spring");
  //       }
  //       if (element.classList.contains("winter")) {
  //         element.classList.remove("winter");
  //       }
  //       if (element.classList.contains("fall")) {
  //         element.classList.remove("fall");
  //       }
  //       element.classList.add("summer");
  //     });
  //   } else {
  //     seasonalElements.forEach((element) => {
  //       if (element.classList.contains("spring")) {
  //         element.classList.remove("spring");
  //       }
  //       if (element.classList.contains("summer")) {
  //         element.classList.remove("summer");
  //       }
  //       if (element.classList.contains("winter")) {
  //         element.classList.remove("winter");
  //       }
  //       element.classList.add("fall");
  //     });
  //   }
  // },
});
export { CurrentSeasonContext };
