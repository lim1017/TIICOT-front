import React, { useEffect, useState } from "react";
import './StudentList.css'
import { fake } from "faker";
const faker = require('faker');



function StudentList({student, index}) {

  return (
    <div className="student-container">
      <div><img src={faker.image.avatar()} alt="Girl in a jacket" width="25px" height="25px" />
        {student.FirstName}  {student.LastName}</div>
    </div>
  );
}

export default StudentList;
