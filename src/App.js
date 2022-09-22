import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  let cardElements = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;