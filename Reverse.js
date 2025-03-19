//reverse the array using push and pop
// a b c e -> e c b a
let array2 = ['a' , 'b' , 'c' , 'e']
let array3 = [];

array1.push('a');
array1.push('b');
array1.push('c');
array1.push('e');
console.log (array1)

for (let i =0; i<array1.length; i++){
	(array3.push(array2.pop));
}

console.log(array2)
