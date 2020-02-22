import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        let classes = this.getBadgeClasses();

        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}

export default Counter;
