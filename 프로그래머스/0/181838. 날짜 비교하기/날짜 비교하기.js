function solution(date1, date2) {
    const aDate = new Date(date1.join("-"));
    const bDate = new Date(date2.join("-"));
    
    return aDate < bDate ? 1 : 0;
}