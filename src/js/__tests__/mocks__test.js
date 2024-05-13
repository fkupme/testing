import getLevel from '../mocks';
import fetchData from '../http-module-mock';
import DataMock from '../mock'

jest.mock('../http-module-mock');




describe('getLevel', () => {
		test('mock', () => {
		fetchData.mockImplementation(() => new DataMock('ok', 5));	
		expect(getLevel(10)).toBe(`Ваш текущий уровень: 5`)
	});
		test('mock', () => {
		fetchData.mockImplementation(() => new DataMock('err', 5));	
		expect(getLevel(10)).toBe(`Информация об уровне временно недоступна`)
	});
});
