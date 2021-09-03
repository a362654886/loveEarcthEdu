import styled from "styled-components";
import { Button, InputGroup } from "react-bootstrap";

export const LoginMain = styled.div`
  min-height: 1000px;
  height: auto;
  margin: auto 10%;
  text-align: center;
  h5 {
    color: #1b62a4;
    font-style: italic;
    margin-top: 3rem;
  }
`;

export const LoginBody = styled.div`
  width: 500px;
  height: 500px;
  margin: 20px auto;
`;

export const LoginInput = styled(InputGroup)`
  margin: 0 auto;
  width: 250px;
  .inputTitle {
    height: 30px;
    width: 100px;
    margin-bottom: 1rem;
    background-color: #e4f1d0;
    color: balck;
  }
  .inputContext {
    height: 30px;
    width: 100px;
    margin-bottom: 1rem;
  }
`;

export const LoginButton = styled(Button)`
  height: 30px;
  width: 70px;
  padding: 0 5px 0 5px;
  margin: 0 auto;
`;
