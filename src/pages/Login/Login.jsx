import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
import Spinner from "../../assets/netflix_spinner.gif";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <div className="login-spinner">
      <img src={Spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={Logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email or mobile number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
