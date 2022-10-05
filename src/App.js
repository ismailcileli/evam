import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import { Switch } from "react-router";
import "./App.css";
import Detail from "./components/Detail";
import List from "./components/List";

function App() {
  return (
    <div className="container mt-5">
      <Router>
   
          <Switch>
            <Route path="/forms/:id" component={Detail}>
              {/* <Detail /> */}
            </Route>
            <Route exact path="/"  component={List}>
              {/* <List /> */}
            </Route>
          </Switch>
       
      </Router>
      
    </div>
  );
}

export default App;
