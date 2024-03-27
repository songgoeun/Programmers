function solution(n)
{
    const num = n.toString();
    return [...num].reduce((acc, list) => {
        return acc = acc + Number(list);
    }, 0);
}