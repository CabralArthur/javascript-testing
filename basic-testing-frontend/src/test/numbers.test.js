import { it, expect } from 'vitest';
import { transformToNumber } from '../util/numbers.js';

it('Should transform a string to a number', () => {
    // 1st A - Arrange
    const value = '1';
    const expectedResult = 1;

    // 2nd A - Act
    const result = transformToNumber(value);

    // 3rd A - Assert
    expect(result).toBe(expectedResult);
});

it('Should transform a string with a decimal point to a number', () => {
    const value = '1.5';
    const expectedResult = 1.5;

    const result = transformToNumber(value);

    expect(result).toBe(expectedResult);
});

it('Should return NaN if a non-numeric string is provided', () => {
    const value2 = {};
    const value = 'invalid';

    const result = transformToNumber(value);
    const result2 = transformToNumber(value2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});