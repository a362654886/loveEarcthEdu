import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { Footer } from "antd/lib/layout/layout";

// header
export const Header = styled(Container)`
  background-color: #212f3c;
  margin: 0;
  height: 100px;
  padding: 10px 10% 10px 10%;
  max-width: 100%;
  display: flex;
`;

//logo
export const LOGO = styled.div`
  width: 300px;
  height: 800px;
  img {
    width: 300px;
    height: 80px;
  }
`;

//Menu
export const Menu = styled.div`
  display: flex;
  padding: 10px 10% 10px 10%;
  width: 100%;
  div {
    width: 20%;
    p {
      color: white;
      cursor: pointer;
      text-align: center;
    }
  }
`;

export const BackGroundBody = styled.div`
  height: auto;
  background-color: transparent;
  opacity: 1;
`;

export const MainBody = styled.div`
  width: 100%;
  margin: 0 auto;
`;

//main page

export const MainPage = styled.div`
  min-height: 1000px;
  height: auto;
  margin: auto 10%;
`;

export const HeaderDiv = styled.div`
  display: flex;
  margin: 10px;
`;

//slider
export const RecommendSlider = styled.div`
  height: 400px;
  width: 65%;
`;

export const HeaderInfo = styled.div`
  width: 35%;
  div {
    height: 50%;
  }
`;

export const HeaderSlider = styled.div`
  margin: 10px;
  h6 {
    text-align: center;
  }
  p {
    height: auto;
  }
`;

//footer
export const FooterDiv = styled(Footer)`
  background-color: #192b2c;
  display: flex;
`;

export const FooterPartDiv = styled(Footer)`
  background-color: #192b2c;
  width: 25%;
  h4 {
    color: white;
    border-bottom: 1px solid white;
  }
  p {
    text-align: left;
    color: white;
    font-size: 16px;
  }
`;

export const ContextDiv = styled.div`
  margin: 0.5rem;
  height: 200px;
  background-color: #eaeaea;
  position: relative;
  padding: 10px;
  h5 {
    color: #1b62a4;
    font-style: italic;
  }
  p {
  }
  h6 {
    text-decoration: underline;
    font-style: italic;
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 20px;
  }
`;
