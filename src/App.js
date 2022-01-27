import React, { Component } from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts";

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
}

export default App;
