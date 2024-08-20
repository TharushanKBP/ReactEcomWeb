import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo-blue.png";
import google_image from "../../assets/images/google_image.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    if (context && typeof context.setisHeaderFooterShow === "function") {
      context.setisHeaderFooterShow(false);

      return () => {
        context.setisHeaderFooterShow(true);
      };
    }
  }, [context]);

  return (
    <section className="section signInPage" aria-labelledby="signInTitle">
      <div className="container_login">
        <div className="logoContainer">
          <img src={logo} alt="Your Logo" className="logo" />
        </div>

        <h3 id="signInTitle">Sign In</h3>
        <form className="signInForm">
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-required="true"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              aria-required="true"
            />
          </div>

          <div className="d-flex align-items-center mt-3 mb-3">
            <button className="signInButton col-8">
              Sign In
            </button>

            <Link to="/">
              <button className="cancelButton col ml-4">
                Cancel
              </button>
            </Link>
          </div>

          <div className="additionalOptions">
            <a href="#" className="forgotPassword">
              Forgot Password?
            </a>
            <a href="#" className="createAccount">
              Create an Account
            </a>
          </div>
          <div className="social-login">
            <p>Or continue with social account</p>
            <img src={google_image} alt="Google icon" className="google-icon" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
