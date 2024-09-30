import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="p-12 absolute text-white bg-opacity-80 bg-black  w-3/12 my-36 mx-auto right-0 left-0  rounded-lg"
      >
        <h1 className="font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-transparent rounded-lg border"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full bg-transparent rounded-lg border "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent rounded-lg border"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4  text-xl cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm
            ? "New to Netflix? Signup Now"
            : "Already registered? SignIn Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
