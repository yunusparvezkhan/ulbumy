import React from "react";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <center>
          <h1 className="text-3xl font-bold underline" >Ulbumy</h1>
        </center>
        <UsersList />
      </div>
    </div>
  );
}

export default App;
