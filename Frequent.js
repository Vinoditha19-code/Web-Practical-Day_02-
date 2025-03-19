//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the Array

let freArray = [4,8,3,4,3,2,1,8,4]

let count = 0;

for(let i=0; i<freArray.length; i++)
{
	for(let j=0; j<freArray.length; j++)
	{
		if(freArray[i]==freArray[j])
		{
			count++;
		}
	}
} 

console.log(freArray)

