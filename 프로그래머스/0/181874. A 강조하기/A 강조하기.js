function solution(myString) {
    return [...myString].map((list) => list === "a" || list === "A" ? list.toUpperCase() : list.toLowerCase()).join("");
}