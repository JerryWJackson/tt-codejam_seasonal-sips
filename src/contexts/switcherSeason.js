import { constants } from "../utils/constants";

const seasonalElements = constants.seasonalElements;

const curtime = new Date(),
  curmonth = curtime.getMonth() + 1;

if (curmonth == 12 || curmonth == 1 || curmonth == 2) {
  seasonalElements.forEach((element) => {
    if (element.classList.contains("spring")) {
      element.classList.remove("spring");
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
    element.classList.add("spring");
  });
} else if (curmonth == 6 || curmonth == 7 || curmonth == 8) {
  seasonalElements.forEach((element) => {
    if (element.classList.contains("spring")) {
      element.classList.remove("spring");
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
    element.classList.add("fall");
  });
}
