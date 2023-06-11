import "./App.css";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; //npm i bootstrap-dark-5 boostrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
import Allorders from "./screens/Allorders";
import "react-toastify/dist/ReactToastify.css";
import CompletedOrders from "./screens/CompletedOrders";
import AddFoodData from "./screens/AddFoodData";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <ToastContainer style={{ color: "red" }} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
            <Route exact path="/allorders" element={<Allorders />} />
            <Route exact path="/completedorders" element={<CompletedOrders />} />
            <Route exact path="/addfooddata" element={<AddFoodData />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
