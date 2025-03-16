import { useEffect } from "react";
import { useState } from "react";

const DATA = [
  {
    name: "clientsideDev",
    url: "https://www.clientside.dev/explore/projects",
  },
  {
    name: "FrontEnd churn",
    url: "https://www.algochurn.com/frontend",
  },
  {
    name: "BigFrontend",
    url: "https://bigfrontend.dev/",
  },
  {
    name: "50 Coding Puzzle",
    url: "https://choubey.gitbook.io/react-coding-puzzles/introduction",
  },
  {
    name: "Reactterry",
    url: "https://www.reacterry.com/portal/challenges?source=sign-up",
  },
  {
    name: "Devtools",
    url: "https://devtools.tech/dashboard/questions?language=react",
  },
  {
    name: "GreatFrontend",
    url: "https://www.greatfrontend.com/",
  },
  {
    name: "Github See",
    url: "https://github.com/matcharr/frontendExpert-interview-practice",
  },
  {
    name: "Dapelican",
    url: "https://www.dapelican.dev/js-exercises",
  },
  {
    name: "React Challenges",
    url: "https://reactchallenges.live/",
  },
  {
    name: "CodeDamn",
    url: "https://codedamn.com/dashboard",
  },
  {
    name: "FrontendPro",
    url: "https://www.frontendpro.dev/frontend-coding-challenges",
  },
  {
    name: "Frontend Hire",
    url: "https://frontendhire.com/questions/",
  },
  {
    name: "Edabit",
    url: "https://edabit.com/challenges/javascript",
  },
];

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const arr = [];
    while (arr.length < 3) {
      const idx = Math.floor((Math.random() * 1000) % DATA.length);
      if (arr.find((elem) => elem === idx) === undefined) {
        arr.push(idx);
      }
    }
    const dataArr = [];
    arr.forEach((idx) => dataArr.push(DATA[idx]));
    setData(dataArr);
  }, []);

  return (
    <div style={{ fontSize: "30px" }}>
      <h1 style={{ color: "green" }}>Do These Today</h1>
      {data.map(({ name, url }, idx) => (
        <div key={idx}>
          <p>
            <span style={{color: "blue"}}>{idx + 1}</span>{" "}→{" "}
            <a href={url} style={{ color: "red", textDecoration: "none" }}>
              {name}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
