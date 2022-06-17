import "./App.css";
import { About } from "./components/about/About";
import { Intro } from "./components/intro/Intro";
import { ProjectList } from "./components/projectsList/ProjectList";
import { Contact } from "./components/contact/Contact";
import { useContext } from "react";
import { ThemeContext } from "./ContextApi";
import { Toggle } from "./components/toggle/Toggle";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
