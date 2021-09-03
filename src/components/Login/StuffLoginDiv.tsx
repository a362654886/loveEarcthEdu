import * as React from "react";
import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import {
  LoginBody,
  LoginButton,
  LoginInput,
  LoginMain,
} from "../../cssJs/LoginCss";

const StuffLoginDiv = (): JSX.Element => {
  const [userEmail, setEmail] = useState("");
  const [passWord, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<Element>) => {
    if ((e.target as HTMLInputElement).placeholder == "email") {
      setEmail((e.target as HTMLInputElement).value);
    }
    if ((e.target as HTMLInputElement).placeholder == "password") {
      setPassword((e.target as HTMLInputElement).value);
    }
  };

  const submit = async () => {
    //
  };

  return (
    <LoginMain>
      <h5>Stuff Login</h5>
      <LoginBody>
        <LoginInput>
          <InputGroup.Prepend>
            <InputGroup.Text className="inputTitle">UserEmail:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="inputContext"
            aria-describedby="basic-addon3"
            placeholder="email"
            onChange={onChange}
            value={userEmail}
          />
        </LoginInput>
        <LoginInput>
          <InputGroup.Prepend>
            <InputGroup.Text className="inputTitle">Password</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="inputContext"
            aria-describedby="basic-addon3"
            placeholder="password"
            onChange={onChange}
            value={passWord}
          />
        </LoginInput>
        <LoginInput>
          <LoginButton variant="primary" onClick={submit}>
            Log In
          </LoginButton>
          <LoginButton variant="secondary">Sign up</LoginButton>
        </LoginInput>
      </LoginBody>
    </LoginMain>
  );
};

export default StuffLoginDiv;
