import Validator from '../app';

test('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
  expect(Validator.validateUsername('Erma_4a5-k')).toBe(true);
});

test('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9) - 2й вариант', () => {
  expect(Validator.validateUsername('йErma_те45ст-k')).toBe(false);
});

test('Имя не должно содержать подряд более трёх цифр', () => {
  expect(Validator.validateUsername('Erma_45555-k')).toBe(false);
});

test('Имя может содержать подряд от одной до трёх цифр', () => {
  expect(Validator.validateUsername('Erma_455-k')).toBe(true);
});

test('Имя не должно начинаться с цифр', () => {
  expect(Validator.validateUsername('4Erma_45-k')).toBe(false);
});

test('Имя не должно заканчиваться цифрой', () => {
  expect(Validator.validateUsername('Erma_45-k4')).toBe(false);
});

test('Имя не должно начинаться с символа подчёркивания', () => {
  expect(Validator.validateUsername('_Erma_45-k')).toBe(false);
});

test('Имя не должно заканчиваться символом подчёркивания', () => {
  expect(Validator.validateUsername('Erma_45-k_')).toBe(false);
});

test('Имя не должно начинаться с символа тире', () => {
  expect(Validator.validateUsername('-Erma_45-k')).toBe(false);
});

test('Имя не должно заканчиваться символом тире', () => {
  expect(Validator.validateUsername('Erma_45-k-')).toBe(false);
});

test('Имя не должно быть пустым', () => {
  expect(Validator.validateUsername('')).toBe(false);
});
