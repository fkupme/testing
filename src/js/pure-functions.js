export const showHealthStatus = (char) => {
	if (char.health > 50){
		return 'healthy';
	} else if (char.health >= 15){
		return 'wounded';
	} else if (char.health < 15){
		return 'critical';
	}
};