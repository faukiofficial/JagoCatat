import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import Footer from "../../components/Footer/Footer";

const Login = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
        setError("Please enter your name");
        return;
      }
  

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please input the password");
      return;
    }

    if (password.length < 8) {
      setError("Password minimum 8 digits");
      return;
    }

    setError("");

    // SignUp API Call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password
      })

      // Handle successful registration response
      if (response.data && response.data.error) {
        setError(response.data.message)
        return
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken)
        navigate("/dashboard")
      }
    } catch (error) {
      // Handle registration error
      if (error.response && error.response.data && error.response.data.mesaage){
        setError(error.response.data.mesaage)
      } else {
        setError("An unexpected error occured. Please try again.")
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28 px-2">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-600 text-xs pb-1">{error}</p>}

            <button className="btn-primary" type="submit">
              Create Account
            </button>

            <p className="text-sm text-center mt-4">
              Sudah punya akun?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
