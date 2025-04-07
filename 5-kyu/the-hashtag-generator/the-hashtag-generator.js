 
function generateHashtag (str) {
    if(str == "" || !str) return false;
    let result = "#";
    let capitalLetter = true;
    for(let i = 0; i < str.length; i ++){
        if(capitalLetter){
            result += str[i].toUpperCase();
        }
        else{
            result += str[i];
        }
        if(str[i] == ' ') capitalLetter = true;
        else capitalLetter = false;
    }
    result = result.replace(/ /g, "");
    if(result.length > 140 || result == "#") return false;
    console.log(result);
    return result;
}