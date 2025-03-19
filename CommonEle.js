/* 
a = [4,5,6,3,7]
b = [8,3,2,1,5]
find the common elements between a and b
*/

let arrA = [4,5,6,3,7]
let arrB = [8,3,2,1,5]

for(i = 0 ; i<arrA.length; i++){
	for( j =0; j<arrB.length; j++)
	{
		if ( arrA[i] == arrB[j])
		{
			console.log(arrA[i]);
		}
	}
}
console.log();
