import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CheckOutContainer from "./container/CheckOutContainer";
import Login from "./components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./ContextApi/StateProvider";

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("this is the user", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOutContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
