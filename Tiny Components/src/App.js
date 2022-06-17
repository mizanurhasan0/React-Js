import "./App.css";
import React from "react";
import Pageination from "./Components/pagination";
import PropsTypeClass from "./Components/PropsTypeClass";
import FetchDataSWR from "./Components/FatchingData-swr";
import { SWRConfig } from "swr";
import Carousel from "./Components/Carousel/Carousel";
import FormValidationYup from "./Components/FormValidation/FormValidationYup";
import { SearchFilter } from "./Components/SearchFilter/SearchFilter";
import { Navigation } from "./Components/ResponsiveNavi/Navigation";
import { Login } from "./Components/Login/Login";

// const fetcher = (...args) => fetch(...args).then((response) => response.json());
import { QueryClient, QueryClientProvider } from "react-query";
import Data from "./Components/DataFetching/Data";
import Data2 from "./Components/DataFetching/Data2";

function App() {
  return (
    // <Pageination/>
    // <PropsTypeClass />

    // <SWRConfig value={{ fetcher }}>
    //   <FetchDataSWR />
    // </SWRConfig>
    // <Carousel />
    // <FormValidationYup />
    // <SearchFilter />
    // <Navigation />
    <Login />

    // <Data2 />
  );
}

export default App;
