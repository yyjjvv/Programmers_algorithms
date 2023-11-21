function solution(survey, choices) {
    let surveyArr = []
    for (let el of survey){
      surveyArr.push(el.split(''))
    }
    const result = {
      'R': 0,
      'T': 0,
      'C': 0,
      'F': 0,
      'J': 0,
      'M': 0,
      'A': 0,
      'N': 0
    }
    const score = {
      1: 3,
      2: 2,
      3: 1,
      4: 0,
      5: 1,
      6: 2,
      7: 3
    }
    let answer = '';

    for (let i = 0; i < surveyArr.length; i++){
      if(choices[i] < 4) result[surveyArr[i][0]] += score[choices[i]];
      else if(choices[i] > 4) result[surveyArr[i][1]] += score[choices[i]];
    }

    if (result['R'] >= result['T']) answer += 'R';
    else answer += 'T';

    if (result['C'] >= result['F']) answer += 'C';
    else answer += 'F';

    if (result['J'] >= result['M']) answer += 'J';
    else answer += 'M';

    if (result['A'] >= result['N']) answer += 'A';
    else answer += 'N';
    
    return answer;
}