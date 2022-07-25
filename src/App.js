import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Authentication/hooks/context/AuthProvider";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
      </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
