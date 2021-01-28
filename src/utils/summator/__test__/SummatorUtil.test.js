import SummatorUtil from '../SummatorUtil';

test('Передаём два числа и получаем их сумму', () => {
  expect(SummatorUtil.sumNumbers({num1: 1, num2: 2})).toBe(3);
});

test('При передаче пустого объекта получаем null', () => {
  expect(SummatorUtil.sumNumbers({})).toBeNull();
});

test('Если хотя бы один из объектов не число - получаем null', () => {
  expect(SummatorUtil.sumNumbers({num1: 1, num2: 'asdfasdf'})).toBeNull();
});
