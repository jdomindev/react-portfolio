const icons = [
  { id: 1, icon: "devicon-html5-plain-wordmark" },
  { id: 2, icon: "devicon-css3-plain-wordmark" },
  { id: 3, icon: "devicon-javascript-plain" },
  { id: 4, icon: "devicon-react-original-wordmark" },
  { id: 5, icon: "devicon-nodejs-plain-wordmark" },
  { id: 6, icon: "devicon-express-original-wordmark" },
  { id: 7, icon: "devicon-mongodb-plain-wordmark" },
  { id: 8, icon: "devicon-mysql-plain-wordmark" },
  { id: 9, icon: "devicon-npm-original-wordmark" },
  { id: 10, icon: "devicon-git-plain-wordmark" },
];

const projects = [
  {
    id: 1,
    title: "Tandem-Fandom",
    position: "Developer | Designer",
    description:
      "MERN stack app designed for those seeking to find and match with users with similar fandom interests. Created back-end by combining a Node.js/Express.js server and MongoDB/GraphQL database and query language. Utilized a React front-end supplemented with bootstrap, react-bootstrap, and react router.",
    repo: "https://github.com/jdomindev/tandemfandom",
    deployed: "https://tandemfandom.herokuapp.com/",
    image: require("../images/project-image-6.png"),
    icons: [
      { id: 1, icon: "devicon-html5-plain-wordmark" },
      { id: 2, icon: "devicon-css3-plain-wordmark" },
      { id: 3, icon: "devicon-javascript-plain" },
      { id: 4, icon: "devicon-react-original-wordmark" },
      { id: 5, icon: "devicon-nodejs-plain-wordmark" },
      { id: 6, icon: "devicon-express-original-wordmark" },
      { id: 7, icon: "devicon-mongodb-plain-wordmark" },
    ],
  },
  {
    id: 2,
    title: "Tech Blog",
    position: "Developer | Designer",
    description:
      "Blog where users can create, update, and delete their own blog posts and comment on other user’s posts. Built functionality following the MVC paradigm and utilizing Handlebars.js, Sequelize, and express-session for authentication.",
    repo: "https://github.com/jdomindev/tech-blog",
    deployed: "https://secret-everglades-34739.herokuapp.com/",
    image: require("../images/project-image-5.png"),
    icons: [
      { id: 1, icon: "devicon-html5-plain-wordmark" },
      { id: 2, icon: "devicon-css3-plain-wordmark" },
      { id: 3, icon: "devicon-javascript-plain" },
      { id: 4, icon: "devicon-react-original-wordmark" },
      { id: 5, icon: "devicon-nodejs-plain-wordmark" },
      { id: 6, icon: "devicon-mysql-plain-wordmark" },
    ],
  },
  {
    id: 3,
    title: "Game Getter",
    position: "Developer | Designer",
    description:
      "App where you can search for the best deals for any video game you desire. Leverages RawG and Cheapshark APIs to find the best deals for video games from across the web.",
    repo: "https://github.com/jdomindev/game-getter",
    deployed: "https://jdomindev.github.io/game-getter/",
    image: require("../images/project-image-1.png"),
    icons: [
      { id: 1, icon: "devicon-html5-plain-wordmark" },
      { id: 2, icon: "devicon-css3-plain-wordmark" },
      { id: 3, icon: "devicon-javascript-plain" },
    ],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    position: "Developer | Designer",
    description:
      "Weather app that utilizes data fetched from OpenWeatherMap API. Built using Bootstrap and JavaScript to dynamically render API data.",
    repo: "https://github.com/jdomindev/weather-dashboard",
    deployed: "https://jdomindev.github.io/weather-dashboard/",
    image: require("../images/project-image-4.png"),
    icons: [
      { id: 1, icon: "devicon-html5-plain-wordmark" },
      { id: 2, icon: "devicon-css3-plain-wordmark" },
      { id: 3, icon: "devicon-javascript-plain" },
    ],
  },
  {
    id: 5,
    title: "Work Day Planner",
    position: "Developer | Designer",
    description:
      "Day scheduler that renders HTML dynamically using jQuery and Bootstrap. The app also utilizes Moment library and stores values in local storage.",
    repo: "https://github.com/jdomindev/work-day-planner",
    deployed: "https://jdomindev.github.io/work-day-planner/",
    image: require("../images/project-image-2.png"),
    icons: [
      { id: 1, icon: "devicon-html5-plain-wordmark" },
      { id: 2, icon: "devicon-css3-plain-wordmark" },
      { id: 3, icon: "devicon-javascript-plain" },
    ],
  },
  {
    id: 6,
    title: "Password Generator",
    position: "Developer",
    description:
      "Generator that takes in user input for password prerequisites and then generates a random password on the page. ",
    repo: "https://github.com/jdomindev/password-generator",
    deployed: "https://jdomindev.github.io/password-generator/",
    image: require("../images/project-image-3.png"),
    icons: [{ id: 3, icon: "devicon-javascript-plain" }],
  },
];

module.exports = { projects, icons };
