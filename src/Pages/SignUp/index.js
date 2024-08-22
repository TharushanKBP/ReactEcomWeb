import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo-blue.png";
import google_image from "../../assets/images/google_image.png";
import { Link } from "react-router-dom";

const SignUp = () => {
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

        <h3 id="signInTitle">Sign Up</h3>
        <form className="signInForm">
          <div className="inputRow">
            <div className="inputGroup">
              <label htmlFor="name">Name <span className="required-asterisk">*</span></label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                aria-required="true"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="number">Phone No <span className="required-asterisk">*</span></label>
              <input
                type="tel"
                id="number"
                placeholder="Enter your phone number"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="inputGroup">
            <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-required="true"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password <span className="required-asterisk">*</span></label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              aria-required="true"
            />
          </div>

          <div className="d-flex align-items-center mt-3 mb-3">
            <button className="signInButton col-5">Sign Up</button>

            <Link to="/">
              <button
                className="cancelButton col ml-4"
                variant="outlined"
                onClick={() => context.setisHeaderFooterShow(true)}
              >
                Cancel
              </button>
            </Link>
          </div>

          <div className="additionalOptions">
            <span style={{ color: "black" }}>
              Already registered? <a href="/signIn" className="forgotPassword">Login</a>
            </span>
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

export default SignUp;
