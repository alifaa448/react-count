import { useState, useCallback } from 'react';

export default (initialCountValue) => {
    const [ countValue, setCountValue ] = useState(initialCountValue);

    const handleIncrement = useCallback(() => {
        setCountValue(state => state + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCountValue(state => state - 1);
    }, []);

    const handleReset = useCallback(() => {
        setCountValue(0);
    }, []);

    return [countValue, handleIncrement, handleDecrement, handleReset];
}