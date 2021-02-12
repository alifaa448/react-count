import React, {Component} from 'react';

import CounterPage from "../components/CounterPage";

class CounterPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            isEven: true
        }
    }


    handleIncrement = () => {
        this.setState({ countValue: this.state.countValue + 1 });
    }


    handleReset = () => {
        this.setState({ countValue: 0, isEven: true });
    }

    handleDecrement = () => {
        this.setState({ countValue: this.state.countValue - 1 });
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.countValue !== prevState.countValue && this.state.countValue > 0) {
            this.setState({ isEven: !this.state.isEven })
        }
        console.log('Update!');
    }

    render() {
            return (
                <CounterPage countValue={ this.state.countValue } isEven={ this.state.isEven } handleIncrement={ this.handleIncrement } handleDecrement={ this.handleDecrement } handleReset={ this.handleReset } />
            );
    }
}

export default CounterPageContainer;