function solution(my_string) {
    const nums = my_string.match(/[0-9]+/g);
    return nums ? nums.map(num => Number(num)).reduce((a, b) => a + b) : 0;
}