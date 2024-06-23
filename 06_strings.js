const name = "kalyani"
const count = 10
console.log(`Hello my name is ${name} and my age is ${count}`);

const game = new String("Kalyani");
//in console it will print like array 
//but String is actually object and it gives length and all other properties
console.log(game);

console.log(game[0]);
console.log(game.length);
//it will give the length of the string

console.log(game.toLowerCase());
console.log(game.charAt(2));
//charAt gives the character at the specified index
console.log(game.indexOf("l"));
//indexOf gives the index of the specified character

console.log(game.slice(-8, 4));
//slice gives the substring from the specified index to the specified index
//if we give negative index it will start from the end of the string
//if we give only one index it will give the substring from that index to the end of the

//trim
const game1 = "   Kalyani "
console.log(game1);
console.log(game1.trim());
//trim removes the leading and trailing spaces blank spaces

const url = "www.kalyani%20bharsat"
console.log(url.replace('%20', '-'));
//replace replaces the specified character with the specified character

console.log(url.includes('a'));
//includes checks whether the specified character is present in the string or not

const name1 ="Kalyani bharsat"
console.log(name1.split(' '));
//split splits the string into an array of substrings separated by the specified character