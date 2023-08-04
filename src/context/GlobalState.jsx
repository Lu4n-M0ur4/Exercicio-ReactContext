import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import axios from "axios";
// import Headers from "../utils/Authorization.js";
import PropTypes from "prop-types";

const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [idTrue, setIdTrue] = useState(false)


  useEffect(() => {
    getUsers();
    

  }, []);

console.log(userData);

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
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "luan-moura-easley",
            // Authorization: "rodrigo-santos-carver",
          },
        }
      );
      
      setIdTrue(!idTrue)
      setUserData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  
  
  const data = {
    getUserByid,
    users,
    userData,
    idTrue, 
    setIdTrue,
    setUserData
   
    
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
