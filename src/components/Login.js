import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utills/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/Slice/userSlice";
import { USER_AVTAR } from "../utills/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    //validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value
      // name.current.value || ""
    );
    setErrorMessage(message);
    if (message) return;
    // SignUp SignIn Logic
    if (!isSignInForm) {
      // SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            // photoURL: "https://avatars.githubusercontent.com/u/105529394?v=4",
            photoURL: USER_AVTAR,
          })
            .then(() => {
              //Immediately update user data in redux
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          setErrorMessage(error?.message);
        });
    } else {
      // SignINlogic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
        })
        .catch((error) => {
          setErrorMessage(error?.message);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="p-12 absolute text-white bg-opacity-80 bg-black  w-3/12 my-36 mx-auto right-0 left-0  rounded-lg"
      >
        <h1 className="font-bold py-4 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-transparent rounded-lg border"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full bg-transparent rounded-lg border "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent rounded-lg border"
        />
        <p className="text-red-500 font-bold py-2 text-xl">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleClick}
        >
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
