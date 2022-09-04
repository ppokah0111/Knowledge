import "./App.css";
//import { useState } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Login";

import AddFormStudents from "./components/uniStudentsForm/AddFormStudents";
import UpdateFormStudents from "./components/uniStudentsForm/UpdateFormStudents";
import GetFormStudents from "./components/uniStudentsForm/GetFormStudents";
import DeleteFormStudents from "./components/uniStudentsForm/DeleteFormStudents";

import AddFormTeachers from "./components/uniTeachersForm/AddFormTeachers";
import DeleteFormTeachers from "./components/uniTeachersForm/DeleteFormTeachers";
import GetFormTeachers from "./components/uniTeachersForm/GetFormTeachers";
import UpdateFormTeachers from "./components/uniTeachersForm/UpdateFormTeachers";

import AddFormMarks from "./components/uniMarksForm/AddFormMarks";
import DeleteFormMarks from "./components/uniMarksForm/DeleteFormMarks";
import GetFormMarks from "./components/uniMarksForm/GetFormMarks";
import UpdateFormMarks from "./components/uniMarksForm/UpdateFormMarks";

import AddFormExams from "./components/uniExamsForm/AddFormExams";
import DeleteFormExams from "./components/uniExamsForm/DeleteFormExams";
import GetFormExams from "./components/uniExamsForm/GetFormExams";
import UpdateFormExams from "./components/uniExamsForm/UpdateFormExams";

import UpdateFormCutoff from "./components/uniCutoffForm/UpdateFormCutoff";
import GetFormCutoff from "./components/uniCutoffForm/GetFormCutoff";
import AddFormCutoff from "./components/uniCutoffForm/AddFormCutoff";
import DeleteFormCutoff from "./components/uniCutoffForm/DeleteFormCutoff";

import UpdateFormCourses from "./components/uniCoursesForm/UpdateFormCourses";
import GetFormCourses from "./components/uniCoursesForm/GetFormCourses";
import AddFormCourses from "./components/uniCoursesForm/AddFormCourses";
import DeleteFormCourses from "./components/uniCoursesForm/DeleteFormCourses";

import UpdateFormClasses from "./components/uniClassesForm/UpdateFormClasses";
import GetFormClasses from "./components/uniClassesForm/GetFormClasses";
import AddFormClasses from "./components/uniClassesForm/AddFormClasses";
import DeleteFormClasses from "./components/uniClassesForm/DeleteFormClasses";

import UpdateFormAssigns from "./components/uniAssignsForm/UpdateFormAssigns";
import GetFormAssigns from "./components/uniAssignsForm/GetFormAssigns";
import AddFormAssigns from "./components/uniAssignsForm/AddFormAssigns";
import DeleteFormAssigns from "./components/uniAssignsForm/DeleteFormAssigns";

import AdminLink from './navLink/adminLink';
import StudentLink from './navLink/studentLink';
import TeacherLink from "./navLink/teacherLink";
import MarkLink from "./navLink/markLink";
import ExamLink from "./navLink/examLink";
import CutoffLink from "./navLink/cutoffLink";
import CourseLink from "./navLink/courseLink";
import ClassLink from "./navLink/classLink";
import AssignLink from "./navLink/assignLink";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="AddFormStudents" element={<AddFormStudents />} />
        <Route path="UpdateFormStudents" element={<UpdateFormStudents />} />
        <Route path="GetFormStudents" element={<GetFormStudents />} />
        <Route path="DeleteFormStudents" element={<DeleteFormStudents />} />

        <Route path="AddFormTeachers" element={<AddFormTeachers />} />
        <Route path="UpdateFormTeachers" element={<UpdateFormTeachers />} />
        <Route path="GetFormTeachers" element={<GetFormTeachers />} />
        <Route path="DeleteFormTeachers" element={<DeleteFormTeachers />} />

        <Route path="AddFormMarks" element={<AddFormMarks />} />
        <Route path="UpdateFormMarks" element={<UpdateFormMarks />} />
        <Route path="GetFormMarks" element={<GetFormMarks />} />
        <Route path="DeleteFormMarks" element={<DeleteFormMarks />} />

        <Route path="AddFormExams" element={<AddFormExams />} />
        <Route path="UpdateFormExams" element={<UpdateFormExams />} />
        <Route path="GetFormExams" element={<GetFormExams />} />
        <Route path="DeleteFormExams" element={<DeleteFormExams />} />

        <Route path="AddFormCutoff" element={<AddFormCutoff />} />
        <Route path="UpdateFormCutoff" element={<UpdateFormCutoff />} />
        <Route path="GetFormCutoff" element={<GetFormCutoff />} />
        <Route path="DeleteFormCutoff" element={<DeleteFormCutoff />} />

        <Route path="AddFormClasses" element={<AddFormClasses />} />
        <Route path="UpdateFormClasses" element={<UpdateFormClasses />} />
        <Route path="GetFormClasses" element={<GetFormClasses />} />
        <Route path="DeleteFormClasses" element={<DeleteFormClasses />} />

        <Route path="AddFormCourses" element={<AddFormCourses />} />
        <Route path="UpdateFormCourses" element={<UpdateFormCourses />} />
        <Route path="GetFormCourses" element={<GetFormCourses />} />
        <Route path="DeleteFormCourses" element={<DeleteFormCourses />} />

        <Route path="AddFormAssigns" element={<AddFormAssigns />} />
        <Route path="UpdateFormAssigns" element={<UpdateFormAssigns />} />
        <Route path="GetFormAssigns" element={<GetFormAssigns />} />
        <Route path="DeleteFormAssigns" element={<DeleteFormAssigns />} />

        <Route path="adminLink" element={<AdminLink />} />
        <Route path="studentLink" element={<StudentLink />} />
        <Route path="teacherLink" element={<TeacherLink />} />
        <Route path="markLink" element={<MarkLink />} />
        <Route path="examLink" element={<ExamLink />} />
        <Route path="cutoffLink" element={<CutoffLink />} />
        <Route path="courseLink" element={<CourseLink />} />
        <Route path="classLink" element={<ClassLink />} />
        <Route path="assignLink" element={<AssignLink />} />

      </Routes>

   
    </div>
  );
}

export default App;
