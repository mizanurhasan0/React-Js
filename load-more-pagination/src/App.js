import { useState } from "react";
import "./App.css";
import DataApi from "./DataApi";

function App() {
  const [noOfElements, setnoOfElements] = useState(4);
  const slice = DataApi.cardData.slice(0, noOfElements);

  const loadData = () => {
    setnoOfElements(noOfElements + noOfElements);
  };
  return (
    <div className="App">
      <div className="container">
        {slice.map((item, key) => {
          return (
            <div className="card" key={key}>
              <div className="coverImage">
                <img src={require("./car.jpg")} alt="car" />
              </div>
              <h2 className="title">Car Title {item.title}</h2>
              <p className="body">
                Car {item.desc} carrier containers are used to move cars by road
                and rail. However in exceptional cases, the car carrier
                containers are used to ship by sea also. Generally, RORO (Role
                On Roll Off) shipping arrangements are done to move cars and
                other automobiles by sea.Car carrier containers are used to move
                cars by road and rail.
              </p>
              <h4 className="footer">Software BD</h4>
            </div>
          );
        })}
        <button onClick={loadData}>Load More</button>
      </div>
    </div>
  );
}

export default App;
