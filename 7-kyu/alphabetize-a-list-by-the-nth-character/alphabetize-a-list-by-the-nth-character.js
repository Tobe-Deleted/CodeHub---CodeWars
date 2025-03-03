function sortIt(list, n) 
{
    let words = list.split(", ");
    words.sort((a,b) => 
    {
        let charA = a[n -1] || "";
        let charB = b[n -1] || "";
        let primarySort = charA.localeCompare(charB, undefined, {sensitivity: "base"});
        return primarySort !== 0 ? primarySort : a.localeCompare(b, undefined, {sensitivity: "base"});
    });
    return words.join(", ");
}