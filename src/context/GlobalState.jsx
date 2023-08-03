import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext.js";
import axios from "axios";
import Headers from "../utils/Authorization.js";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers =  () => {
    // try {
    //   const response = await axios.get(
    //     "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    //     {
    //       headers: {
    //         Authorization: "rodrigo-santos-carver",
    //       },
    //     }
    //   );
    //   console.log(response)
    //   setUsers(response.data);
    // } catch (error) {
    //   console.log(error.response);
    // }
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "rodrigo-santos-carver",
          },
        }).then((res)=>console.log(res))
        .catch((err) => console.log(err))
  };
  
  const data = {
    getAllUsers,
    users,
    setUsers,
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
