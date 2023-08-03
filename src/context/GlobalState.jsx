import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import axios from "axios";
import Headers from "../utils/Authorization.js";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const GlobalState = (props) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        Headers
      );
      setUser(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const data = {
    getAllUsers,
    user,
    setUser,
  };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
