import { sortCharsArray } from '../matchers.js'

  test ('compare sorted and unsorted arrays', () => {
	expect(sortCharsArray([
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
]))
.toEqual([
	{ name: 'мечник', health: 10 },
	{ name: 'лучник', health: 80 },
	{ name: 'маг', health: 100 }
  ])
  })
