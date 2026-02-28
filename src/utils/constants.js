const constants = {
  apiKey: "AIzaSyCDJPcmSrZUgzZVFeaB9mHSKfX4JZJcKnE",
  seasonalElements: [
    { CardList: ["card", "description"] },
    { Footer: ["footer", "footer__names", "footer__year"] },
    { Header: ["header__container-title"] },
    {
      Home: [
        "home__submit",
        "home__circle",
        "home__caption-byline",
        "home__caption",
        "home__description",
      ],
    },
    { Main: ["main__map_title", "main_home-btn", "main_away-btn"] },
  ],
  seasons: {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    fall: [9, 10, 11],
  },
};

export { constants };
