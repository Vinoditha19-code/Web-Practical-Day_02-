//find the max number in the array using foreach loop
//method_01
let arr = [4,5,8,6]
let max = 0;
arr.forEach((x) => {
	if(max < x) {
		max = x
	}
})
 console.log("max num is:" + max);
 console.log();
