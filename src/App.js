// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello Hii this is new
//           changes nothing changed. Again, today nothing is updated. Exam Day. I
//           am preparing for my next exam i.e. Management. Tomorrow is my last
//           exam.Tomorrow i'm going to home. From today I am starting React. Today
//           is 2nd date of reactjs. React
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ReactDom from "react-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// const heading = React.createElement("h1", { id: "heading" }, "namste react");
// console.log(heading);



const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};
// const Title=()=> (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );
// const HeadingComponent = () => (
//   return <h1 className="heading"> Namaste React </h1>;
// );

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
