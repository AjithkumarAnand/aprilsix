import React from "react";
import "./Task1.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState } from "react";
import { Input, InputAdornment } from "@mui/material";

function Task1() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (name === "") {
      setNameError("Name cannot be blank");
      isValid = false;
    } else {
      setNameError("");
    }

    if (password === "") {
      setPasswordError("Phone cannot be blank");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let user = document.getElementById("inputForm").value;
      let pass = document.getElementById("passwordForm").value;

      alert(`Username is :  ${user} & Password is : ${pass} `);
      console.log(`Username is :  ${user} & Password is : ${pass} `);
    }
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBlur = () => {
    if (password === "") {
      setPasswordError("Password cannot be blank");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-title">
          <div
            className="form-group logogroup"
            style={{ display: "inline-block", fontWeight: "bold" }}
          >
            <span className="logo">SuaLogo</span>

            <span
              style={{
                color: "gold",
                fontSize: "70px",
              }}
            >
              #
            </span>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="username">
                <Input
                  id="inputForm"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setName(e.target.value)}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <span className="btn">
                        <PersonOutlineIcon />
                      </span>
                    </InputAdornment>
                  }
                />

                {nameError && <div className="error">{nameError}</div>}
              </div>
            </div>
            <div className="password">
              <Input
                id="passwordForm"
                placeholder="Enter your password"
                endAdornment={
                  <InputAdornment position="end">
                    <span className="btn" onClick={togglePasswordVisibility}>
                      {passwordVisibility ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </span>
                  </InputAdornment>
                }
                type={passwordVisibility ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleBlur}
                required
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>

            <button
              id="submit_button"
              className="btn btn-dark form-control"
              type="submit"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Task1;
