//import * as data from './result.json'; //loading data from json file
var data=JSON.parse('{"name": "Asad  Abukhalil","rating": "3.7","takeagain": "44%","difficulty": "2.2"}')
const fullName=data.name; //stores full name
const rating=data.rating; //stores professor rating
const takeAgainPerc=data.takeagain; //percentage of students that would take the class again
const difficultyLevel=data.difficulty;// difficulty level
//const allReviews=data.reviews; //array of all reviews with the most recent being on top
//var length=allReviews.length; //stores number of reviews in the JSON file
// for(var i=0;i<length;i++)
// {
    
// }
//console.log(fullName);
document.write("Name:",fullName);
document.write("<br>");
document.write("Rating: ",rating,"/5");
document.write("<br>");
document.write("Students retaking: ",takeAgainPerc);
document.write("<br>");
document.write("Difficulty level: ",difficultyLevel,"/5");
document.write("<br>");
//HTML coding
// <html>
//     <head>
//         <script src="E:\mhacks_11\popup.js"></script>
//     </head>
// </html>
