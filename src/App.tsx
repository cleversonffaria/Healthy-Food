import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "src/assets/style/global";
import { Colors } from "./utils";

import Home from "src/pages/home";
import About from "src/pages/register";
import Error from "src/pages/error";

const App: React.FC = () => (
  <ThemeProvider theme={Colors}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={About} />
        <Route path="/*" component={Error} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
