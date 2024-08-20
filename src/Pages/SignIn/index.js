import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo-blue.png";

const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    if (context && typeof context.setisHeaderFooterShow === "function") {
      // Hide the header and footer when the component mounts
      context.setisHeaderFooterShow(false);

      // Restore the original state when the component unmounts
      return () => {
        context.setisHeaderFooterShow(true);
      };
    }
  }, [context]);

  return (
    <section className="section signInPage" aria-labelledby="signInTitle">
      <div className="container_login">
        {/* Logo Section */}
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
          <button type="submit" className="signInButton">
            Sign In
          </button>
          <div className="socialSignIn">
            <button type="button" className="googleSignIn">
              <i className="fab fa-google"></i> Sign in with Google
            </button>
            <button type="button" className="facebookSignIn">
              <i className="fab fa-facebook-f"></i> Sign in with Facebook
            </button>
          </div>

          <div className="additionalOptions">
            <a href="#" className="forgotPassword">
              Forgot Password?
            </a>
            <a href="#" className="createAccount">
              Create an Account
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
