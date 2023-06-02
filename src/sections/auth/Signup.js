import React from "react";
import Card from "../../components/common/UI/Card/card";
import Button from "../../components/common/UI/button/Button";
import "./style.css";
import { useState, useEffect } from "react";
import Login from "./Login";

const InputForm = () => {
  const [email, setEmail] = useState("ssgibrar1000@gmail.com");
  const [pass, setPass] = useState("");
  const [IsLogin, setLogin] = useState(false);
  const [formISValid, setformISValid] = useState(true);

  const [errorText, seterrorText] = useState({
    email: "",
    pass: "",
  });
  const [blurred, setblurred] = useState(false);

  const name1handler = (event) => {
    setEmail(event.target.value);
    setformISValid(true);
    if (event.target.value.length > 4) {
      seterrorText({
        email: "",
      });
    }
  };
  const name2handler = (event) => {
    setPass(event.target.value);
    seterrorText({
      pass: "",
    });
  };

  const blurHandler = () => {
    setblurred(true);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || email.trim().length <= 2) {
      seterrorText({ email: "email must required or valid..." });
      return;
    } else if (pass.trim() === "" || pass.trim().length <= 2) {
      seterrorText({ pass: "password must required or valid..." });
      return;
    }
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjAo7Ms93bxXzhpFxyz-ozLofBrirTJBM",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log("login_data__:", data.error.message);
        seterrorText({ pass: data.error.message });
      }
      if (!response.ok) {
        throw Error("Throw_error__");
      }
      setEmail("");
      setPass("");
    } catch (error) {
      console.log("auth error Ocurs__:\n\n", error);
    }
  };

  return (
    <>
      {IsLogin ? (
        <Login />
      ) : (
        <Card>
          <h1 className="headrerh1"> Signup </h1>
          <form action="#" onSubmit={formSubmitHandler}>
            <div className={`inputContainer ${blurred ? "ISblurred" : ""}`}>
              <input
                type="text"
                value={email}
                onChange={name1handler}
                onBlur={blurHandler}
                placeholder="Enter Email"
              />
              <p className="errorhander">{errorText.email}</p>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                value={pass}
                placeholder="Enter Password"
                onChange={name2handler}
              />
              <p className="errorhander">{errorText.pass}</p>
            </div>

            <div>
              <Button
                disbaled={!formISValid}
                onClick={formSubmitHandler}
                customStyle="btnContainer"
              >
                Signup
              </Button>
              <Button
                customStyle="btnContainer"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default InputForm;
