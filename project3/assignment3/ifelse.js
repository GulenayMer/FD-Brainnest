/*
	exc. a: 
	accepts two integers and displays the larger of the two.
*/
function findLarger(x, y)
{
	if (x > y)
	{
		console.log(x);
		return (x);
	}
	else if (y > x)
	{
		console.log(y);
		return (y);
	}
}

findLarger(9, 14);


/*
	exc. b: 
	checks whether an integer is an even or an odd number.
*/

function checkEvenOdd(number)
{
	if (number % 2 == 0)
	{
		console.log("it is an even number.");
		return (1);
	}
	else
	{
		console.log("it is an odd number.");
		return (0);
	}
}

checkEvenOdd(31);