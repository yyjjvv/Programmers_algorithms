function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b);
    let sum2 = queue2.reduce((a, b) => a + b);
    let average = (sum1 + sum2) / 2;
    let tried = 0;
    let queueLength = queue1.length + queue2.length;
    let flag = false;
    let idx1 = 0;
    let idx2 = 0;

    while(tried < queueLength * 2){
      if (sum1 > sum2){
        let selected = queue1[idx1++]
        sum1 -= selected;
        sum2 += selected;
        queue2.push(selected);
      } else if (sum2 > sum1){
        let selected = queue2[idx2++]
        sum2 -= selected;
        sum1 += selected;
        queue1.push(selected);
      } else {
        flag = true;
        break;
      }
      tried++;
    }

    return flag ? tried : -1;
}