function solution(myString, pat) {
    let result = 0;
    let pos = myString.indexOf(pat);
    while(pos !== -1) {
        pos = myString.indexOf(pat, pos + 1);
        result++;
    }
    
    return result;
    
//     var count = 0;
//     var searchChar = 'a'; // 찾으려는 문자
//     var pos = text.indexOf(searchChar); //pos는 0의 값을 가집니다.

//     while (pos !== -1) {
//       count++;
//       pos = text.indexOf(searchChar, pos + 1); // 첫 번째 a 이후의 인덱스부터 a를 찾습니다.
//     }

}