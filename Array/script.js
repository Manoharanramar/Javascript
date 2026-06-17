let num = 10;
let name = "vidhya"; // A single variable stores only one value

let cities = ["chennai", "Madurai", "Trichy"];
let marks = [78, 56, 67, 54, 98];

// length - total number of elements in the array
console.log(marks.length); // 5

// access 2nd element from the start (index starts with 0)
console.log(marks[1]); // 56

// access 3rd element in the array
console.log(marks[2]); // 67

// last element
console.log(marks[marks.length - 1]); // 98

// mix of numbers, strings, and nested arrays
let arr = [5, 6, 7, "a", "abc", [3, 4]];
console.log(arr); // [5, 6, 7, "a", "abc", [3, 4]]
console.log(arr[5]); // [3, 4]
console.log(arr[5][0]); // 3
console.log(arr[5][1]); // 4

// 2D array
let matrix = [
  [3, 4, 5],
  [4, 5, 7],
  [6, 7, 8],
];

console.log(matrix[0][0]); // 3
console.log(matrix[1][2]); // 7

// Array methods
let array = ["a", "b", "c", "d", "e"];

// push - adds an element to the end
array.push("f");
console.log(array); // ['a', 'b', 'c', 'd', 'e', 'f']

// pop - removes and returns the last element
console.log(array.pop()); // f
console.log(array); // ['a', 'b', 'c', 'd', 'e']

// shift - removes and returns the first element
console.log(array.shift()); // a
console.log(array); // ['b', 'c', 'd', 'e']

// unshift - adds an element to the beginning and returns new length
console.log(array.unshift("a")); // 5
console.log(array); // ['a', 'b', 'c', 'd', 'e']

// delete
// delete leaves an empty slot instead of shifting elements
delete array[2];
console.log(array); // ['a', 'b', empty, 'd', 'e']

// Reset array for splice examples
array = ["a", "b", "c", "d", "e"];

// splice
/*
1st parameter - starting index
2nd parameter - number of elements to delete
3rd (or more) parameters - values to insert
*/

// Delete one element at index 2
array.splice(2, 1);
console.log(array); // ['a', 'b', 'd', 'e']

// Delete two elements starting at index 2
array.splice(2, 2);
console.log(array); // ['a', 'b']

// Replace one element at index 1 with 'm'
array = ["a", "b", "c", "d", "e"];
array.splice(1, 1, "m");
console.log(array); // ['a', 'm', 'c', 'd', 'e']

// Replace two elements with 'x' and 'y'
array.splice(1, 2, "x", "y");
console.log(array); // ['a', 'x', 'y', 'd', 'e']

// Insert without deleting
array.splice(1, 0, "b");
console.log(array); // ['a', 'b', 'x', 'y', 'd', 'e']

// slice(startIndex, endIndex)
// endIndex is NOT included
console.log(array.slice(1, 2)); // ['b']
console.log(array.slice(1, 3)); // ['b', 'x']
console.log(array.slice(1)); // ['b', 'x', 'y', 'd', 'e']

// reverse
array.reverse();
console.log(array); // ['e', 'd', 'y', 'x', 'b', 'a']

// join - converts array to string
let str = array.join();
console.log(str); // e,d,y,x,b,a

// split - converts string to array
let str3 = "d,c,b,a";
let arr3 = str3.split(",");
console.log(arr3); // ['d', 'c', 'b', 'a']

// concat and spread operator
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let joinedarr = [firstArr, secondArr];
console.log(joinedarr); // [[1,2,3],[4,5,6]]

let joinedArr = firstArr.concat(secondArr);
console.log(joinedArr); // [1,2,3,4,5,6]

let joined = [...firstArr, ...secondArr];
console.log(joined); // [1,2,3,4,5,6]

/*
Exercise 5:
Arr = [5, 8, 10, 7, 9, 11]

1. Replace 7, 9, 11 with 17, 19, 111
2. Insert 100 at the beginning
3. Insert 200 in the last but one position
4. Add 1000 at the end
5. Insert 0 in the middle using arr.length
*/

let arrr = [5, 8, 10, 7, 9, 11];

// Replace 7, 9, 11 with 17, 19, 111
arrr.splice(3, 3, 17, 19, 111);

// Insert 100 at the beginning
arrr.unshift(100);

// Insert 200 in the last but one position
arrr.splice(arrr.length - 1, 0, 200);

// Add 1000 at the end
arrr.push(1000);

// Insert 0 in the middle
let middle = Math.floor(arrr.length / 2);
arrr.splice(middle, 0, 0);

console.log(arrr);
// Output: [100, 5, 8, 10, 0, 17, 19, 200, 111, 1000]