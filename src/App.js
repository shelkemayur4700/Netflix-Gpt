import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utills/Store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
