import React, { useEffect, useState } from "react";

import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";

const axios = require("axios");

function Main() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [nameSearch, setNameSearch] = useState({ First: "", Last: "" });

  useEffect(() => {
    const targetUrl = "https://tiicottom.herokuapp.com/api/get/students";

    axios.get(targetUrl).then((response) => {
      setData(response.data);
      setFilterData(response.data);
    });
  }, []);

  useEffect(() => {
    let copy = [...data];

    if (nameSearch.First === "") {
      setFilterData(data);
    }

    if (nameSearch.First !== "") {
      const searchFilter = copy.filter((student) =>
        student.FirstName.toLowerCase().includes(nameSearch.First)
      );
      setFilterData(searchFilter);
      copy = [...searchFilter];
    }

    if (nameSearch.Last !== "") {
      const searchFilter = copy.filter((student) =>
        student.LastName.toLowerCase().includes(nameSearch.Last)
      );
      setFilterData(searchFilter);
    }
  }, [nameSearch]);

  return (
    <div className="App">
      <h1 style={{ display: "flex", justifyContent: "center" }}>My Students</h1>
      <SearchBar
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        type="First"
      />
      <SearchBar
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        type="Last"
      />

      {filterData.length
        ? filterData.map((student, index) => {
            return <StudentList student={student} index={index} />;
          })
        : null}
    </div>
  );
}

export default Main;
