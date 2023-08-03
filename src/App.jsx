
import Router from "./router/Router.jsx";
import GlobalState from "./context/GlobalState.jsx";

function App() {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
