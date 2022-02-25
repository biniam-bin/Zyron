import { useState } from "react";

//components //
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";

//components //
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex items-center h-full bg-[#212529]">
        <Switch>
          <Route path="/main">
            <SideBar />
            <Main />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
