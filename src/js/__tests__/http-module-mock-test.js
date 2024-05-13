import fetchData from '../http-module-mock';

test('should be error', () => {
	expect(()=>fetchData('https://jestjs.io/')).toThrow(`Mock this!`)
})