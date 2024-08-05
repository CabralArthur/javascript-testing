import { transformToNumber } from './util/numbers.js';
import { validateStringNotEmpty, validateNumber } from './util/validation.js';

export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export function parseNumbers(numberValues) {
    const numbers = [];

    for (const numberValue of numberValues) {
        validateStringNotEmpty(numberValue);
        const number = transformToNumber(numberValue);
        validateNumber(number);
        numbers.push(number);
    }

    return numbers;
}

