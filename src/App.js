// import React from "react";
// export function MyApp() {
//   // name export
//   // functional component
//   return (
//     <div className="App">
//       <h1>App Component</h1>
//     </div>
//   );
// }

// export function Title(props) {
//   return (
//     <div>
//       <h2>My Title</h2>
//     </div>
//   );
// }

// function Index() {
//   return (
//     <React.Fragment>
//       <h1>Index Component</h1>
//       <Title />
//       <Title />
//       <Title />
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
//         voluptatum quasi et, magni delectus voluptatem reprehenderit, quas
//         officiis consequatur vitae, hic iure. Cumque, nobis magnam eum iure
//         consequuntur labore quae.
//       </p>
//     </React.Fragment>
//   );
// }

// export default Index;

import React, { Component } from "react";
import Navbar from "./components/Navbar";
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  title = "Expense Tracker";
  style = { color: "blue", textAlign: "center" };
  render() {
    return (
      <>
        <Navbar />
        <h1 style={this.style}>{this.title}</h1>
        <p style={{ color: "green", textAlign: "center" }}>
          This is a simple expense tracker
        </p>
      </>
    );
  }
}

export default App;
