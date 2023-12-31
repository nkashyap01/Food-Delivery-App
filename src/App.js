// import logo from "./logo.svg";
// import "./App.css";

//
//   );
// }

// export default App;

import React from "react";
import ReactDom from "react-dom/client";
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
