import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Link,
} from "react-router-dom";

import One from "./questions/1";
import Two from "./questions/2";
import Three from "./questions/3";
import Four from "./questions/4";
import Five from "./questions/5";
import Six from "./questions/6";

const questions = [
  {
    instructions: [
      `There is a 'list' variable which is currently unused. Iterate this list Array and print the contained strings as <p> elements below.`,
      `However, you should only print a string if the index of the array is odd.`,
    ],

    exercise: <One />,
  },
  {
    instructions: [
      "Using React state, make the 'Toggle' button below toggle the visibility of the div below it.",
    ],
    exercise: <Two />,
  },
  {
    instructions: [
      `There is a 'Reverse List' button below that should flip the order of the <div> elements below (i.e four, three, two, one). However, it's not working right now.`,
      `This exercise is to find the bug and fix it.`,
    ],
    exercise: <Three />,
  },
  {
    instructions: [
      "Currently, items are printed from the 'list' variable no matter what.",
      "This task is to implement a text filter, using an HTML input, that will filter the items to display only the items containing the text entered into the input.",
      "For example, if I type 't', it should show items Two & Three, but if I type 'th', only Three should show.",
    ],
    exercise: <Four />,
  },
  {
    instructions: [
      "Currently, items are printed from the 'list' variabe. This task is to fetch these Star Wars planets from a REST API instead.",
      "A GET request to https://swapi.dev/api/planets will return these planets in the results, display those results below instead of the hardcoded 'list' variable.",
      "Use 'fetch' to do this and do not install any additional libraries, the documentation for this can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch.",

      "Ensure that the REST API is only called ONCE when the page is loaded, and show the text 'loading...' while waiting for a response.",
    ],
    exercise: <Five />,
  },
  {
    instructions: [
      "Currently, the 'count' state variable is displaying as zero. Increment the count variable by 1 every 1000ms (1s) and display this.",
      "The 'simple' solutions to this can often make the number flicker once it gets higher, so make sure to watch it!",
    ],
    exercise: <Six />,
  },
];

const Question = (props: any) => {
  const params = useParams();
  if (!params.number) throw new Error("No question number provided");
  const questionNumber = parseFloat(params.number);
  const question = questions[questionNumber - 1];
  return (
    <div>
      <h1>Question #{questionNumber}</h1>
      <div className="instructions">
        {question.instructions.map((instruction) => (
          <p key={instruction}>{instruction}</p>
        ))}
      </div>
      <section className="exercise">{question.exercise}</section>
      {questionNumber !== 1 && (
        <Link to={"/question/" + (questionNumber - 1)}>
          <button className="nav-button">Prev</button>
        </Link>
      )}
      {questionNumber !== questions.length && (
        <Link to={"/question/" + (questionNumber + 1)}>
          <button className="nav-button">Next</button>
        </Link>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome to codafication world!</h1>
        <Link to="question/1">Begin</Link>
      </div>
    ),
  },
  {
    path: "question/:number",
    element: <Question />,
  },
]);

const App = () => {
  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
