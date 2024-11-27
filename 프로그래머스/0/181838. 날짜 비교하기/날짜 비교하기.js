function solution(date1, date2) {
    const aDate = new Date(date1);
    const bDate = new Date(date2);
    
    return aDate < bDate ? 1 : 0;
}