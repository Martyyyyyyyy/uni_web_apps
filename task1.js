function StrToWrds(str){
    const wordsArray = str.split(' ');
    return wordsArray;
}
const str = "one two three four five";
const wrd = StrToWrds(str);
console.log(wrd);