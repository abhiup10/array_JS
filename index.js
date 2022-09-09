// Declaring Javascript array

var friends = ["abhishek" , "aish", "shubh","arti"];
var states = ["Delhi", "Jaipur","Gurgaon", "Chennai","Lucknow"];

document.write("array practice Day 2" + "<br>");

// displaying length of array using length property
document.write("<br>" + friends.length+ "<br>");

document.write("<br>"+"for loop" + "<br>");


// using loops in array

//for loop
// it display content

for(var i=0; i<friends.length; i++)
{
    document.write(friends[i]+ "<br>");
} 

// in basic for loops we need to initialize the starting and ending limit of the loop, hoowever we have two other loops which can do the same thing but without initialization and setting ending limit.

//for in loop
//it display's only the index

document.write( "<br>"+ "for in loop (loop without the need to initialize or set endling limit)" + "<br>");


for(var friend in friends)
{
    document.write(friend+ "<br>");
}
//for of loop
// it displays content only

document.write( "<br>"+ "for of loop (loop without the need to initialize or set endling limit)" + "<br>");

for( friend of friends)
{
    document.write(friend + "<br>")
}

// forEach loop
// this loop is a combination of both for in and for of loop.
// it display's both index and content of array

// adding new elements to array
//push method

var colors = ["red","green","blue","yellow"];
colors.push("pink");

document.write("<br>"+ colors + "<br>");

// adding new element to beginning of array
// unshift()
document.write("<br>")

var cars = ["maruti","kia","toyota","nexa"];
cars.unshift("jeep","hyundai");
document.write(cars);


document.write("<br>")
// removing elements from the array
//pop
cars.pop();
document.write(cars+ "<br>") ;
document.write(cars.length + "<br><br>");

// shift method
//deleting element from beginning
var colors = ["red","green","blue","white"];
document.write(colors + "<br>");
colors.shift();
document.write(colors + "<br><br>");

//Adding or Removing Elements at Any Position
// splice function

//removing only first element
var colors = ["red","green","blue","white"];
document.write(colors + "<br>")
var removed = colors.splice(1,1);
document.write(colors + "<br><br>")

//removing all ellements
var colors = ["red","blue","pink","green","yellow"];
document.write(colors + "<br>");
colors.splice(0);
document.write(colors +"deleted array" +"<br><br>");

//removing 1st element of array
// here green color is removed as it is 1st element
var colors = ["red","green","blue","white"];
colors.splice(1,1);
document.write(colors + "<br><br>");

//removing 2nd element and replacing two elements
//here Manish and Anshika were added after all

var names = ["Abhishek","Shubh","Aishwarya","Aarti","Tushar","Priyanshu"];
document.write(names + "<br>");
document.write(names.length + "<br>");
var removed = names.splice(2,1,"Manish","Anshika");
document.write(names + "<br>");
document.write(names.length + "<br>");
document.write(removed); // returns the elements that were deleted.


// sorting in array

var number = [20,30,40,43,71,23,2,9,100];
number.sort(function(a,b){
  return a-b;
})

console.log(number);


var number1 = [20,30,40,43,71,23,2,9,100];
number1.sort();
console.log(number1);


// selecting max element in array

var number = [20,30,40,43,71,23,2,9,100];
var max = Math.max.apply(null,number);

console.log(max);

// selcting minimum element in array

var number = [20,30,40,43,71,23,2,9,100];
var min = Math.min.apply(null,number); 
console.log(min);







