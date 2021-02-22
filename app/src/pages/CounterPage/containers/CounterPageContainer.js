import React, { useState, useCallback, useEffect } from 'react';

import CounterPage from "../components/CounterPage";

const CounterPageContainer = () => {

    const [ countState, setCountState ] = useState({
        countValue: 0,
        isEven: true
    });

    useEffect(() => {
        const isEven = countState.countValue % 2 === 0;
        setCountState((state) => {
            return {
                ...state,
                isEven
            }
        })
    },[countState.countValue]);

    const handleIncrement = useCallback(() => {
        setCountState((state) => {
            return {
                countValue: state.countValue + 1
            }
        });
    }, []);

    const handleReset = useCallback(() => {
        setCountState({ countValue: 0, isEven: true });
    }, []);

    const handleDecrement = useCallback(() => {
        if (countState.countValue > 0) {
            setCountState((state) => {
                return {
                    countValue: state.countValue - 1
                }
            });
        }
    }, [countState.countValue]);

    return (
                <CounterPage
                    countValue={countState.countValue}
                    isEven={countState.isEven}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleReset={handleReset}
                />
            );
}

export default CounterPageContainer;