import "./App.css";
import { Page } from "./Components/mainPages/Page";
import { Headers } from "./Components/headers/Headers";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./GlobalState";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Headers />
          <Page />
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
