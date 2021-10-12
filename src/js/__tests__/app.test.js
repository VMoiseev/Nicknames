import Validator from '../app';

test('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
  expect(new Validator('Erma_4a5-k').validateUsername()).toBe(true);
});

test('Имя не должно содержать подряд более трёх цифр', () => {
  expect(new Validator('Erma_45555-k').validateUsername()).toBe(false);
});

test('Имя может содержать подряд от одной до трёх цифр', () => {
  expect(new Validator('Erma_455-k').validateUsername()).toBe(true);
});

test('Имя не должно начинаться с цифр', () => {
  expect(new Validator('4Erma_45-k').validateUsername()).toBe(false);
});

test('Имя не должно заканчиваться цифрой', () => {
  expect(new Validator('Erma_45-k4').validateUsername()).toBe(false);
});

test('Имя не должно начинаться с символа подчёркивания', () => {
  expect(new Validator('_Erma_45-k').validateUsername()).toBe(false);
});

test('Имя не должно заканчиваться символом подчёркивания', () => {
  expect(new Validator('Erma_45-k_').validateUsername()).toBe(false);
});

test('Имя не должно начинаться с символа тире', () => {
  expect(new Validator('-Erma_45-k').validateUsername()).toBe(false);
});

test('Имя не должно заканчиваться символом тире', () => {
  expect(new Validator('Erma_45-k-').validateUsername()).toBe(false);
});

test('Имя не должно быть пустым', () => {
  expect(new Validator('').validateUsername()).toBe(false);
});

test('Имя не должно содержать киррилицу', () => {
  expect(new Validator('йErma_45-k').validateUsername()).toBe(false);
});
