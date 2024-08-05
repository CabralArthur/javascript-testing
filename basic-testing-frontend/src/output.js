export const generateResultText = result => {
    let resultText = '';

    if (result === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        resultText = 'Result: ' + result;
    }

    return resultText;
};

export const outputText = text => {
    const output = document.getElementById('result');

    output.textContent = text;
};