function sum(a, b) {
    return a + b;
}
export default sum;

// main.js
import sumModule from './sum';

console.log(sumModule(1, 2));

export function sum2(a, b) {
    return a + b;
}