import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utills/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utills/Slice/userSlice";
import { LOGO, Logo } from "../utills/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((Store) => Store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    //this will call when compo unmount
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute justify-between flex w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 " src={LOGO} alt="image" />
      {user && (
        <div className="flex p-2 items-center gap-2">
          <img src={user?.photoURL} alt="User Icon" className="w-12 " />
          <button className="font-bold text-white " onClick={handleSignout}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
