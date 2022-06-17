import "./App.css";
import { AccountWrapper } from "./Componets/AccountWrapper";
import { Banner } from "./Componets/Banner";
import { Categories } from "./Componets/Categories";
import { Checkout } from "./Componets/Checkout";
import { Feature } from "./Componets/Feature";
import { Header } from "./Componets/Header";
import { LastPart } from "./Componets/LastPart";
import { Login } from "./Componets/Login";
import { Navbar } from "./Componets/Navbar";
import { ProductDetails } from "./Componets/ProductDetails";
import { Products } from "./Componets/Products";
import { ProductWrapper } from "./Componets/ProductWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <Feature />
      <Categories />
      <ProductWrapper />

      <LastPart />
      <Products />
      <ProductDetails />
      <Login />
      <AccountWrapper />
      <Checkout />
    </div>
  );
}

export default App;
