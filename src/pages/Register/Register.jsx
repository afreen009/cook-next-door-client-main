import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";

const host = import.meta.env.VITE_SERVER_HOST;
const PORT = import.meta.env.VITE_SERVER_PORT;
const baseUrl = `http://${host}:${PORT}`;
const RegisterURL = `${baseUrl}/register`;

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post(RegisterURL, {
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
      });

      navigate("/login");
    } catch (error) {
      setError(`${error.message}. What did you mess up.`);
    }
  };

  return (
    <div className="login-containers">
      <h1>Register</h1>
      <div className="login-container"></div>
      <form onSubmit={handleRegister} className="form">
        <div className="form__entries">
          <label className="form__label">Email:</label>
          <input className="form__input" type="text" name="email" />
        </div>

        <div className="form__entries">
          <label className="form__label">Username: </label>
          <input className="form__input" type="text" name="username" />
        </div>

        <div className="form__entries">
          <label className="form__label">Password: </label>
          <input className="form__input" type="password" name="password" />
        </div>

        <button className="form__button" type="submit">
          Register
        </button>
      </form>
      {error && (
        <label
          style={{
            color: "white",
            backgroundColor: "red",
            fontSize: "1.3rem",
          }}
        >
          {error}
        </label>
      )}
      <Link to="/login">Login</Link>
      <div className="login-container"></div>
    </div>
  );
};

export default Register;
