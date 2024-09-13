import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
// import "../../assets/images/4.jpg";

const host = import.meta.env.VITE_SERVER_HOST;
const PORT = import.meta.env.VITE_SERVER_PORT;
const baseUrl = `http://${host}:${PORT}`;

const loginURL = `${baseUrl}/login`;

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(loginURL, {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("JWTtoken", response.data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
      setError(`${error.response.data.error.message}. Fill all the details.`);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <h1 className="logintitile">Login</h1>
        <form onSubmit={handleLogin} className="form">
          <div className="form__entries">
            <label className="form__label">Username</label>
            <input type="text" name="username" className="form__input" />
          </div>

          <div className="form__entries">
            <label className="form__label">Password</label>
            <input type="password" name="password" className="form__input" />
          </div>

          <div className="button-container">
            <button className="form_button form_button--login" type="submit">
              Login
            </button>
            <Link to="/register" className="form_button form_button--register">
              Register
            </Link>
          </div>
        </form>

        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
