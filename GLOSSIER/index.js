import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import  Fragance from "./Fragance";
import Cart from "./Cart";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkinCare from "./SkinCare";
import MakeUp from "./MakeUp";
import Body from "./body";
import Limited from "./limited";
import Fra from "./fra";
import User from "./user";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         
          <Route path="cart" element={<Cart />}/>
         
          <Route path="skin" element={<SkinCare/>}/>
          <Route path="makeup" element={<MakeUp/>}/>
          <Route path="body" element={<Body/>}></Route>
          <Route path="limited" element={<Limited/>}> </Route>
          <Route path="fra" element={<Fra/>}></Route>
          <Route path="user" element={<User/>} ></Route>

          <Route path="/" element={<App/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
