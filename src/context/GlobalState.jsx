import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import axios from "axios";
// import Headers from "../utils/Authorization.js";
import PropTypes from "prop-types";

const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsers();
    getUserByid();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "luan-moura-easley",
            // Authorization: "rodrigo-santos-carver",
          },
        }
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUserByid = async (userId) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userid}`,
        {
          headers: {
            Authorization: "luan-moura-easley",
            // Authorization: "rodrigo-santos-carver",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const data = {
    getUserByid,
    users,
    userData,
    setUserData,
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
