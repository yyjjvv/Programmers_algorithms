const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [cases, ...array] = [...input];
array.forEach((v) => {
    if(v === '') return;
    const [n, ...scores] = v.trim().split(' ').map(Number);
    const avg = scores.reduce((acc, cur) => acc + cur) / n;
    const cnt = scores.filter(v => v > avg).length;
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
})
