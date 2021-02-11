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
        this.setState((state) => {
            return {
                countValue: state.countValue + 1,
                isEven: !state.isEven
            }
        });
    }

    handleReset = () => {
        this.setState({ countValue: 0, isEven: true });
    }

    handleDecrement = () => {
        this.setState((state) => {
            return state.countValue < 0 ? this.handleReset() : {
                countValue: state.countValue - 1,
                isEven: !state.isEven
            }
        });

        if (this.state.countValue <= 0) {
            this.handleReset();
        }
    }

    handleIsEven = () => {
        return (this.state.isEven)  ? 'введено четное число' : 'введено нечетное число';
    }

    handleColor = () => {
        return this.state.isEven ? { backgroundColor: '#202020' } : { backgroundColor: '#1b2062' };
    }


    render() {
            return (
                <CounterPage countValue={ this.state.countValue } isEven={ this.state.isEven } handleIncrement={ this.handleIncrement } handleDecrement={ this.handleDecrement } handleReset={ this.handleReset } handleColor={ this.handleColor } handleIsEven={ this.handleIsEven } />
            );
    }
}

export default CounterPageContainer;