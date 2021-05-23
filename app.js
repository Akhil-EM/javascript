const express=require("express");
const port=process.env.PORT || 3030;


const app=express();
//code section

// string methods
let testString="The purpose of our happy lives is to be happy.";

console.log(testString.length)//string length

///accept second parameter so that it knows where to start
console.log(testString.indexOf("happy")) //find position of string -1 if not found
console.log(testString.lastIndexOf("happy")) //occurrence of last position

console.log(testString.search("lives"))///no second argument acceptable

console.log(testString.slice(0,3)) //slice a string if -v para it takes values from end
console.log(testString.substring(4,11))//same as slice but not accept negative values

console.log(testString.replace("happy","sad")) //replace first occurrence of substring

console.log(testString.toUpperCase());
console.log(testString.toLowerCase());

console.log(testString.concat(" here"," yes")); //concatenate two or more strings

console.log(testString.trim()); //removes white space

console.log(testString.charAt(5)); //extract character at a specific position

console.log(testString[8]) //string can be used as a array

console.log(testString.split('')); //splits a string by position












app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})