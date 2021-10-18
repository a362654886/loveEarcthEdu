import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  ContextDiv,
  HeaderDiv,
  HeaderInfo,
  HeaderSlider,
  MainPage,
  RecommendSlider,
} from "../../cssJs/MainPageCss";
import { SliderDiv } from "./SliderDiv";
const HomePage = (): JSX.Element => {
  const history = useHistory();
  const toPage = (url: string) => history.replace(url);

  return (
    <MainPage>
      <HeaderDiv>
        <RecommendSlider>
          <SliderDiv />
        </RecommendSlider>
        <HeaderInfo>
          <HeaderSlider>
            <h6>New Zealand Chinese Learning</h6>
            <p>
              New Zealand Chinese Learning is a public welfare organizations.
              They have been planning activities such as Learning Chinese corner
              which is New Zealand first communication center of teaching people
              Mandarin and Cantonese. Different from Confucius Institute, which
              is mainly committed to Chinese learning for college students, we
              are committed to Chinese learning for the students in primary
              school, middle school and high school. Meanwhile, we have
              cooperated with government departments, helping senior officials
              learn Chinese.
            </p>
          </HeaderSlider>
          <HeaderSlider>
            <h6>Our vision and goal </h6>
            <p>
              Our vision is to become an internationally renowned high-level
              comprehensive university with distinctive educational
              characteristics based on excellent teaching and environmental
              protection concepts. Our goal is to equip our young people with
              the skills and mindset to thrive and then take on the world.
            </p>
          </HeaderSlider>
        </HeaderInfo>
      </HeaderDiv>
      <ContextDiv>
        <h5>Apply for 2020 </h5>
        <p>Future Student</p>
        <h6
          onClick={() => {
            toPage("/mainPage/futureStudent");
          }}
        >
          Apply
        </h6>
      </ContextDiv>
      <ContextDiv>
        <h5>Courses introductions</h5>
        <p>Bilingual Mathematics And Chinese Language Learning</p>
        <h6
          onClick={() => {
            toPage("/mainPage/courseDiv");
          }}
        >
          Courses link
        </h6>
      </ContextDiv>
      {/* <ContextDiv>
        <h5>Teachers introduction</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          sapien pellentesque habitant morbi tristique senectus et netus et.
          Neque laoreet suspendisse interdum consectetur libero id faucibus nisl
          tincidunt. Senectus et netus et malesuada fames ac. Lorem dolor sed
          viverra ipsum nunc. Sem integer vitae justo eget magna.
        </p>
        <h6>Teachers link</h6>
      </ContextDiv> */}
    </MainPage>
  );
};

export default HomePage;
