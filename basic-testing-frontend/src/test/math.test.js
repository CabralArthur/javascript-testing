import { it, expect } from 'vitest';
import { add } from '../math.js';

it('Should summarize all number values in an array', () => {
    const numbers = [1, 2, 3];    
    const result = add(numbers);

    expect(result).toBe(6);
});