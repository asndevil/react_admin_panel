import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import List from "./page/list/Lists";
import Login from "./page/login/Login";
import Single from "./page/single/Single";
import New from "./page/new/New";
import { productInput, userInput } from "./components/formSource";
import "./components/style/dark.scss";
import { darkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(darkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <List title="user list" url="/users/new" add="Add New User" />
                }
              />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New input={userInput} title="Add new user" />}
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <List
                    title="product list"
                    url="/products/new"
                    add="Add New Product"
                  />
                }
              />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new product" input={productInput} />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
