import { generateResultText, outputText } from './src/output.js';
import { parseNumbers } from './src/parser.js';
import { calculateNumbers, extractNumberValues } from './src/util/numbers.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractNumberValues(form);

  const numbers = parseNumbers(numberValues);

  const result = calculateNumbers(numbers);

  const resultText = generateResultText(result);

  outputText(resultText);
}

form.addEventListener('submit', formSubmitHandler);
