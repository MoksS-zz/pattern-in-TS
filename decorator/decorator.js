class Coffee {
	constructor() {
		this.order = "Coffee";
	};

	cost() {
		return 5;
	};
};

function sugar (coffee)  {
	coffee.order = `${coffee.order} + Sugar`;
	const cost = coffee.cost();
	coffee.cost = () => cost + 1;
};

function small (coffee)  {
	coffee.order = `${coffee.order} + small`;
	const cost = coffee.cost();
	coffee.cost = () => cost - 1;
};

function large (coffee)  {
	coffee.order = `${coffee.order} + large`;
	const cost = coffee.cost();
	coffee.cost = () => cost + 1;
};

function milk (coffee) {
	coffee.order = `${coffee.order} + Milk`;
	const cost = coffee.cost();
	coffee.cost = () => cost + 2;
};

function largeWithMilk (coffee) {
	large(coffee);
	withMilk(coffee);
	const cost = coffee.cost();

	coffee.cost = () => cost;
};

function get_cost (...arg) {

	const coffee = new Coffee();
	
	for ( supplement of arg ) supplement(coffee);

	return `order : ${coffee.order} \ncost : ${coffee.cost()}`;
};

console.log(get_cost(large, sugar, milk));