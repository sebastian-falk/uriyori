import React from "react";
import PageRoutes from "./PageRoutes";

import NavigationBar from "./NavigationBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <h1>Sebbecipes</h1>
      </header>
      <main>
        <PageRoutes />
      </main>
      <footer>asdf</footer>
    </div>
  );
}

export default App;
