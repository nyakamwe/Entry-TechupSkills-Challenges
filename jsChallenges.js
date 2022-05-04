const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, 
]

// Filter and show the product that will be bought when you don't have much money I mean Cheap one

const cheaptem = item.reduce((prev, current) =>
	prev.price < current.price ? prev : current
);
console.log(cheaptem.name,": ",cheaptem.price
);


//Filter and show the product that will be expensive in the array
const expensiveItem = item.reduce((prev, current) =>
	prev.price > current.price ? prev : current
);
console.log(expensiveItem.name ,": ", expensiveItem.price);

//Calculate the full price of all product combined
let total = 0;
item.forEach((values) => {
	total += values.price;
});
console.log("full price of all product is " + total);

//Calculate the full price of all product combined and remove product that are under the 10 dollar
let totalExcludeUnderTen = 0;
item.forEach((values) => {
	if (values.price >= 10) {
		totalExcludeUnderTen += values.price;
	}
});
console.log("The Total Exclude Under Ten Dollar is " + totalExcludeUnderTen);

