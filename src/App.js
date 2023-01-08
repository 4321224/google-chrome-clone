// import React, { useState } from "react";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import { GoogleSearch } from "./api/GoogleSearch";
import Home from "./components/HomeScreen/Home";

function App(props) {
  // const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchData, setSearchData] = useState({});
  // const setSearch = async (term) => {
  //   setSearchTerm(term);
  //   await setData(term);
  //   navigate("/search");
  // };
  // const setData = async (term) => {
  //   const searches = await GoogleSearch(term);
  //   setSearchData(searches);
  // };

  return (
    // <Routes>
    <div>
      <Home />
    </div>
    // </Routes>
  );
}

export default App;
