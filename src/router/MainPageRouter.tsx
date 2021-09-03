import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import FutureStudent from "../components/futureStudent/FutureStudent";
import CourseDiv from "../components/course/CourseDiv";
import StudentLoginDiv from "../components/Login/StudentLoginDiv";
import StuffLoginDiv from "../components/Login/StuffLoginDiv";
import AboutUs from "../components/aboutUs/AboutUs";

const MainPageRouter = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route component={HomePage} path="/mainPage/home" />
        <Route component={FutureStudent} path="/mainPage/futureStudent" />
        <Route component={CourseDiv} path="/mainPage/courseDiv" />
        <Route component={StudentLoginDiv} path="/mainPage/login" />
        <Route component={StuffLoginDiv} path="/mainPage/stuffLoginDiv" />
        <Route component={AboutUs} path="/mainPage/AboutUs" />
      </Switch>
    </>
  );
};

export default MainPageRouter;
