import { showHealthStatus } from '../pure-functions'

const testArr = [
	[{ name: 'class', health: 51 }, 'healthy'],
	[{ name: 'class', health: 50 }, 'wounded'],
	[{ name: 'class', health: 15 }, 'wounded'],
	[{ name: 'class', health: 10 }, 'critical'],
]

test.each(testArr)('testing health status', (charObject, expected) =>{
	expect(showHealthStatus(charObject)).toBe(expected);
});

