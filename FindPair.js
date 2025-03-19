/*arr = [1,2,3,4,5,6]
target = 7
write a code to find the all pairs that sum up to the target*/

let arr3 = [1,2,3,4,5,6]
var target = 7;
let sum = 0;
let x;
let y;
for(let i =0; i < arr3.length; i++){
	for(j = 0; j< arr3.length; j++)
	{
	  x = arr3[i];
	  y = arr3[j];
	
	  sum = x + y;
	  if(sum > target)
	  {
		 console.log(x, y);
	  }	
	}	
}
console.log()

