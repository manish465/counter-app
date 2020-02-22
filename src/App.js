import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <main className="container">
                    <Counters />
                </main>
            </div>
        );
    }
}

export default App;
