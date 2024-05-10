export const sortCharsArray = (array) => {
	return array.sort((a, b) => a.health - b.health);
};