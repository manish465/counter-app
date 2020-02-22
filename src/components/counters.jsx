import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handelReset}
                >
                    Reset
                </button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handelDelete}
                        onIncrement={this.handelIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
