function solution(arr, intervals) {
    
    const answer = intervals.map((list) => {
        return [...arr].slice(list[0], list[1] + 1);
    }).flat();
    return answer;
}