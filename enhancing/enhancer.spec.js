const enhancer = require('./enhancer.js');
// test away!

describe('enhancer object', () => {
	const item = {
		name: 'testItem',
		durability: 85,
		enhancement: 15
	};

	it('succeed', () => {
		expect(enhancer.succeed(item)).toEqual({ ...item, enhancement: 16 });
	});

	const item2 = {
		name: 'testItem',
		durability: 85,
		enhancement: 13
	};

	it('fail less than 15', () => {
		expect(enhancer.fail(item2)).toEqual({ ...item2, durability: 80 });
	});

	const item3 = {
		name: 'testItem',
		durability: 85,
		enhancement: 16
	};

	it('fail more than 15', () => {
		expect(enhancer.fail(item3)).toEqual({ ...item3, durability: 75 });
	});

	const item4 = {
		name: 'testItem',
		durability: 85,
		enhancement: 17
	};

	it('fail more than 16', () => {
		expect(enhancer.fail(item4)).toEqual({
			...item4,
			durability: 75,
			enhancement: 16
		});
	});

	const item5 = {
		name: 'testItem',
		durability: 85,
		enhancement: 17
	};

	it(' add a new name', () => {
		expect(enhancer.get(item5)).toEqual({
			...item5,
			name: '[+17] testItem'
		});
	});

	const item6 = {
		name: 'newTestItem',
		durability: 85,
		enhancement: 0
	};

	it('not change name', () => {
		expect(enhancer.get(item6)).toEqual({
			...item6,
			name: 'newTestItem'
		});
	});

	const item7 = {
		name: 'testItem',
		durability: 85,
		enhancement: 17
	};

	it('add a new name', () => {
		expect(enhancer.repair(item7)).toEqual({
			...item7,
			durability: 100
		});
	});
});
