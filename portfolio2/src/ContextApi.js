import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {
  darkMode: false,
};

const ThemeReduser = (state, action) => {
  switch (action.type) {
    case "Toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, disPatch] = useReducer(ThemeReduser, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, disPatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
