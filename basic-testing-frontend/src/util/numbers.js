import { extractNumbers } from '../parser.js';

export function transformToNumber(value) {
  return +value;
}

export function extractNumberValues(form) {
    const formData = new FormData(form);
    const numberInputs = extractNumbers(formData);

    return numberInputs;
};

export function calculateNumbers(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
};