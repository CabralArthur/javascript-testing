import { it, expect } from 'vitest';
import { add } from '../math.js';

it('Should summarize all number values in an array', () => {
    // 1st A - Arrange
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    // 2nd A - Act
    const result = add(numbers);

    // 3rd A - Assert
    expect(result).toBe(expectedResult);
});

it('Should return 0 if no numbers are provided', () => {
    // 1st A - Arrange
    const numbers = [];
    const expectedResult = 0;

    // 2nd A - Act
    const result = add(numbers);

    // 3rd A - Assert
    expect(result).toBe(expectedResult);
});

it('Should return NaN if some invalid number is included', () => {
    // 1st A - Arrange
    const numbers = ['invalid', 1];

    // 2nd A - Act
    const result = add(numbers);

    // 3rd A - Assert
    expect(result).toBeNaN();
});

it('Should return a correct sum if an array of numeric strings is provided', () => {
    // 1st A - Arrange
    const numbers = ['1', '2', '3'];
    const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0);

    // 2nd A - Act
    const result = add(numbers);

    // 3rd A - Assert
    expect(result).toBe(expectedResult);
});

it('Should throw an error if a non-array is provided', () => {
    const resultFunction = () => add();

    expect(resultFunction).toThrow();
});

it('Should throw an error if provided multiple values instead an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFunction = () => add(num1, num2);

    expect(resultFunction).toThrow();
});