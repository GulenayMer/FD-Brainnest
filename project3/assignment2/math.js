
/*  Pythagoras Theorem: 
	exc.a:
	find the diagonal of a square where the length of each side is 9
*/

function findSquareDiagonal(length)
{
	let diagonal = Math.sqrt(2) * length;
	console.log(diagonal);
	return (diagonal);
}

findSquareDiagonal(9);

/*
	Heron's formula:
	exc.b:
	find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.	
*/

function findTriangleArea(x, y, z)
{
	let average = (x + y + z) / 2;
	let area = Math.sqrt(average * (average - x) * (average - y) * (average - z));
	console.log(area);
	return (area);
}

findTriangleArea(5, 6, 7);


/*
	exc.c:

*/
function calculateCircumference(radius)
{
	let c = 2 * Math.PI * radius;
	console.log(c);
	return (c);
}

calculateCircumference(4);

function calculateCircleArea(radius)
{
	let a = radius * radius * Math.PI;
	console.log(a);
	return (a);
}

calculateCircleArea(4);