import React, { useEffect, useState } from "react";
import "./App.css";

import StudentList from './components/StudentList'
import SearchBar from './components/SearchBar'


const axios = require("axios");

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const targetUrl = "http://localhost:3000/api/get/students";

    axios.get(targetUrl).then((response) => {
      console.log(response);
      setData(response.data)
    });
  }, []);


  return (
    <div className="App">
      <SearchBar type="First Name" />
      <SearchBar type="Last Name"/>


      {data.length ? data.map((student, index) =>{
        return <StudentList student={student} index={index} />
      }) : null }

      
    </div>
  );
}

export default App;
