import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { GlobalContext } from "./Helper/GlobalContext";
import { About } from "./Pages/About";
import { Add } from "./Pages/Add";
import { Card } from "./Pages/Card";
import { Details } from "./Pages/Details";
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { Registration } from "./Pages/Registration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { headers, serverApi } from "./TinnyHelper/TinyHelper";

toast.configure();
function App() {
  const [products, setProducts] = useState([""]);
  const [globalVariable, setGlobalVariable] = useState({
    status: false,
    email: "",
    id: 0,
    activeNav: 1,
    cart: 0,
  });

  useState(() => {
    axios.get(serverApi, "user", headers).then((res) => {
      if (res.data.error) {
        setGlobalVariable({ ...globalVariable, status: false });
      } else {
        setGlobalVariable({
          activeNav: 1,
          cart: 0,
          email: res.data.email,
          id: res.data.id,
          status: true,
        });
      }
    });

    axios.get(serverApi + "product").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          globalVariable,
          setGlobalVariable,
          products,
          setProducts,
        }}
      >
        <BrowserRouter>
          <div className="nav">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/card" element={<Card />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<Add />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
