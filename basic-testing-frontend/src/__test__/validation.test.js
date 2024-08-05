import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from '../util/validation';

describe('Validate String Functions', () => {
    it('Should run without throwing an error when insert a string', () => {
        const value = 'Valid string';
    
        const result = () => validateStringNotEmpty(value);
    
        expect(result).not.toThrow();
    });
    
    it('Should throw an error when insert an empty string', () => {
        const value = '';
    
        const result = () => validateStringNotEmpty(value);
    
        expect(result).toThrow(/Invalid input - must not be empty./);
    });
    
    if('Should throw an error when insert a string with blank spaces', () => {
        const value = '    ';
    
        const result = () => validateStringNotEmpty(value);
    
        expect(result).toThrow(/Invalid input - must not be empty./);
    });
});

describe('Validate Number Functions', () => {
    it('Should run without throwing an error when insert a number', () => {
        const value = 1;
    
        const result = () => validateNumber(value);
    
        expect(result).not.toThrow();
    });
    
    it('Should throw an error when insert a NaN value, (NaN, Object, String...)', () => {
        const value = NaN;
        const objectValue = {};
        const stringValue = 'Invalid number';
    
        const result = () => validateNumber(value);
        const objectResult = () => validateNumber(objectValue);
        const stringResult = () => validateNumber(stringValue);
    
        const expectedErrorMessage = /Invalid number input./;
    
        expect(result).toThrow(expectedErrorMessage);
        expect(objectResult).toThrow(expectedErrorMessage);
        expect(stringResult).toThrow(expectedErrorMessage);
    });
});
