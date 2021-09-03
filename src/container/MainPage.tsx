import * as React from "react";
import {
  BackGroundBody,
  FooterDiv,
  FooterPartDiv,
  Header,
  LOGO,
  MainBody,
  Menu,
} from "../cssJs/MainPageCss";
import logo from "../files/pics/logoPic.png";
import MainPageRouter from "../router/MainPageRouter";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MainPage = (): JSX.Element => {
  const history = useHistory();

  useEffect(() => {
    history.push({
      pathname: "/mainPage/home",
    });
  }, []);

  const toPage = (url: string) => history.replace(url);

  return (
    <div>
      <Header>
        <LOGO>
          <img src={logo} />
        </LOGO>
        <Menu>
        <div>
            <p onClick={() => toPage("/mainPage/home")}>Home</p>
          </div>
          <div>
            <p onClick={() => toPage("/mainPage/futureStudent")}>Future Students</p>
          </div>
          <div>
            <p onClick={() => toPage("/mainPage/courseDiv")}>Course</p>
          </div>
          <div>
            <p onClick={() => toPage("/mainPage/login")}>Student Login</p>
          </div>
          <div>
            <p onClick={() => toPage("/mainPage/stuffLoginDiv")}>Stuff Login</p>
          </div>
          <div>
            <p onClick={() => toPage("/mainPage/aboutUS")}>About</p>
          </div>
        </Menu>
      </Header>
      <BackGroundBody>
        <MainBody>
          <MainPageRouter />
        </MainBody>
      </BackGroundBody>
      <FooterDiv style={{ textAlign: "center" }}>
        <FooterPartDiv>
          <p>Get to know us</p>
        </FooterPartDiv>
        <FooterPartDiv>
          <p>About NZCL</p>
          <p>Address:</p>
          <p>Wellington High Court Building (oppsite Victoria University)</p>
          <p>2 Molesworth St, Pipitea, Wellington</p>
        </FooterPartDiv>
        <FooterPartDiv>
          <p>Contact Us</p>
          <p>Email:</p>
          <p>lovingearthpress@gmail.com</p>
          <p>TEL : 04-4729106</p>
          <p>Mobile : 021-1543065</p>
        </FooterPartDiv>
        <FooterPartDiv>
          <p>Follow Us</p>
        </FooterPartDiv>
      </FooterDiv>
    </div>
  );
};

export default MainPage;
