import { it, expect } from 'vitest';
import writeData from './io';

it('should execute the writeFile method', async () => {
    const testData = 'Some test data';
    const filename = 'test.txt';

    return expect(writeData(testData, filename)).resolves.toBeUndefined();
});