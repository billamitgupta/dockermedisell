import React from "react";
import logi from "../../src/image/e371b4da-02a5-403c-8ca7-59b217a10216.jpeg";
import Grid from "@mui/material/Unstable_Grid2";
import "../../src/style/login.css";

function Login() {
  return (
    <body>
      <div className="loginBody w-screen h-screen">
        <div
        className="  w-9/12 ml-36 mt-24 rounded-2xl border-4 bg-"
          style={{
            
            
            
            
            background:
              "radial-gradient(243.55% 153.69% at 23.48% -1.07%, #EBF3F5 10.46%, #C5E2F0 100%)",
          }}
        >
          <Grid container spacing={1}>
            <div>
              <img
                src={logi}
                style={{
                  width: "55vh",
                  height: "60vh",
                  border: " solid",
                  borderRadius: "2vh",
                }}
                alt="pic"
              ></img>
            </div>
            <div>
              <form action="" style={{ padding: "3vh" }}>
                <label htmlFor="username" style={{ padding: "1vh" }}>
                  Username
                  <br />
                  <input
                    type="textbox"
                    placeholder="Username"
                    style={{
                      border: "1px ",
                      margin: "1vh",
                      borderRadius: "2vh",
                      background: "#B4D8E4",
                      height: "5vh",
                      width: "40vh",
                    }}
                  />
                </label>
                <br />
                <label htmlFor="Password" style={{ padding: "1vh" }}>
                  Password
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    style={{
                      border: "1px",
                      margin: "1vh",
                      borderRadius: "2vh",
                      background: "#B4D8E4",
                      height: "5vh",
                      width: "40vh",
                    }}
                  />
                </label>
                <br />
                <label
                  style={{
                    marginTop: "6vh",
                    color: "#86C5DA",
                    marginLeft: "2vh",
                  }}
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    style={{ marginTop: "6vh", color: "#86C5DA" }}
                  />
                  Accept T&C (read document carefully)
                </label>
                <br />
                <input
                  type="submit"
                  value="submit"
                  style={{
                    background: "blue",
                    borderRadius: "1vh",
                    width: "15vh",
                    height: "6vh",
                    color: "white",
                    marginLeft: "2vh",
                    marginTop: "8vh",
                  }}
                />
                <input type="button" value="" style={{ marginLeft: "5vh" }} />
                Signin
              </form>
            </div>
          </Grid>
        </div>
      </div>
    </body>
  );
}

export default Login;
