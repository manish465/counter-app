import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handelIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handelDelete = counterId => {
        const counters = this.state.counters.filter(
            val => val.id !== counterId
        );
        this.setState({ counters });
    };

    handelReset = () => {
        const counters = this.state.counters.map(val => {
            val.value = 0;
            return val;
        });
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCountersActive={
                        this.state.counters.filter(val => val.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handelReset}
                        onIncrement={this.handelIncrement}
                        onDelete={this.handelDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
