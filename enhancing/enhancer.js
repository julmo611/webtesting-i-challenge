module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	const { enhancement } = item;
	return {
		...item,
		enhancement: enhancement === 20 ? enhancement : enhancement + 1
	};
}

function fail(item) {
	if (item.enhancement < 15) {
		item.durability -= 5;
	} else {
		if (item.enhancement > 16) {
			item.enhancement -= 1;
		}
		item.durability -= 10;
	}

	return { ...item };
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	const { enhancement } = item;

	if (enhancement > 0) {
		item.name = `[+${enhancement}] ${item.name}`;
	}

	return { ...item };
}
