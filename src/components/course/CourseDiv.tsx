import * as React from "react";
import {
  CourseBody,
  CourseFlex,
  CourseMain,
  CourseString,
} from "../../cssJs/CourseCss";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { getChineseLearning, getMath } from "./coursesFille";
import { Course } from "../../../types/Course";

const CourseDiv = (): JSX.Element => {
  const [coursePara, setCourse] = useState<Course>(getMath());

  useEffect(() => {
    setCourse(getMath());
  }, []);

  const chooseCourse = (para: string) => {
    switch (para) {
      case "math":
        setCourse(getMath());
        break;
      case "ChineseLearning":
        setCourse(getChineseLearning());
        break;
      default:
        return <> </>;
    }
  };

  return (
    <CourseMain>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1" onClick={() => chooseCourse("math")}>
          Bilingual Mathematics
        </Menu.Item>
        <Menu.Item key="2" onClick={() => chooseCourse("ChineseLearning")}>
          Chinese Language Learning
        </Menu.Item>
      </Menu>
      <CourseBody>
        <h3>{coursePara.title}</h3>
        <CourseFlex>
          <h6>Time:</h6>
          <p>{coursePara.time}</p>
        </CourseFlex>
        <CourseFlex>
          <h6>Teacher:</h6>
          <p>{coursePara.teacher}</p>
        </CourseFlex>
        <CourseFlex>
          <h6>Introduction:</h6>
          <CourseString
            dangerouslySetInnerHTML={{ __html: coursePara.introduction }}
          />
        </CourseFlex>
        <CourseFlex>
          <h6>Target Student:</h6>
          <CourseString
            dangerouslySetInnerHTML={{ __html: coursePara.target }}
          />
        </CourseFlex>
      </CourseBody>
    </CourseMain>
  );
};

export default CourseDiv;
