import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Layout />
    <Routes>
      <Route path = "/*" element = {<Layout />}>

      </Route>
    </Routes>
  );
}

export default App;
