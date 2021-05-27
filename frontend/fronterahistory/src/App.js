import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header, Footer } from "./components"
import { Home } from "./pages"

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
